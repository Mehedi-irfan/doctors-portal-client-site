import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/appointment'>
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
