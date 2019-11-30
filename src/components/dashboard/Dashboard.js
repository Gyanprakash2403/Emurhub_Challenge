import React, { Component } from 'react';
import Notifications from './Notification';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import TransactionList from '../transactions/TransactionList';

class Dashboard extends Component {
    
    render() {
        //console.log(this.props);
        const { transactions, auth, BitcoinWallet, EthereumWallet } = this.props;

        if(!auth.uid) return <Redirect to='/signin' />        
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className='col s12 m6'>
                        <TransactionList transactions={transactions} />
                    </div>
                    <div className='col s12 m5 offset-m1'>
                        <Notifications EthereumWallet={EthereumWallet} BitcoinWallet={BitcoinWallet} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        transactions: state.firestore.ordered.transactions,
        BitcoinWallet: state.firestore.ordered.BitcoinWallet,
        EthereumWallet: state.firestore.ordered.EthereumWallet,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'transactions'},
        { collection: 'BitcoinWallet'},
        { collection: 'EthereumWallet'}
    ])
)(Dashboard);