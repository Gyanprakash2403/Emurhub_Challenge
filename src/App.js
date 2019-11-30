import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import TransactionDetails from './components/transactions/TransactionDetails';
import SignIn from  './components/auth/SignIn';
import SignUp from  './components/auth/SignUp';
import Transaction from './components/transactions/Transaction';
import Deposit from './components/deposit/deposit';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path='/' component={Dashboard} />
          <Route path='/transaction/:id' component={TransactionDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/transactions' component={Transaction} />
            <Route path='/deposit' component={Deposit} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
