import { CircularProgress } from '@mui/material';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, {useState, useEffect} from 'react';
import useAuth from '../../Hooks/UseAuth'

const CheckOutForm = ({appointments}) => {
    const {price, patientName, _id} = appointments;
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false);
    const {user} = useAuth();
    

    useEffect(()=> {
        fetch('https://glacial-stream-07919.herokuapp.com/create-payment-intent', {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
    },[price])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }
        setProcessing(true)
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type : 'card',
            card
        });
        if(error) {
            console.log(error)
            setError(error)
            setSuccess('')
        }
        else{
            setError('')
            console.log(paymentMethod)
            setSuccess('Your Proccess Successfully')
        }
        //payment intent
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                card: card,
                billing_details: {
                    name: patientName,
                    email : user.email
                },
            },
        },
        );
            if(intentError){
                setError(intentError.message)
                setSuccess('')
            }
            else{
                setError('')
                console.log(paymentIntent)
                setSuccess('your Proccess successfully')
                setProcessing(false)
                const payment = {
                    amount : paymentIntent.amount,
                    created : paymentIntent.created,
                    last4 : paymentMethod.card.last4,
                    transaction: paymentIntent.client_secret.slice('_secret')[0]
                }
                const url = ` https://glacial-stream-07919.herokuapp.com/appointments/${_id}`;
                fetch(url, {
                    method : 'PUT',
                    headers : {
                        'content-type' : 'application/json'
                    },
                    body : JSON.stringify(payment)
                })
                .then(res => res.json())
                .then(data => console.log(data))
            }
            
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
            { processing ? <CircularProgress></CircularProgress> : <button type="submit" disabled={!stripe || success}>
                Pay ${price}
            </button>}
                </form>
                {
                    error && <p style={{color : 'red'}}>{error}</p>
                }
                {
                    success && <p style={{color : 'green'}}>{success}</p>
                }
        </div>
    );
};

export default CheckOutForm;