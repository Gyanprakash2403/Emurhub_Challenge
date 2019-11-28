import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const TransactionDerails = (props) => {

    const { transaction, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />

    if (transaction) {        
        return (
            <div className='container section project-details'>
                <div className='card z-depth-0'>
                    <div className='card-content'>
                        <span className='cart-title'>Transfer To : {transaction.transferTo}</span>
                        <p>Amount: {transaction.amount}</p>
                    </div>
                    <div className='card-action grey lighten-4 grey-text'>
                        <div>Transfer by {transaction.authorFirstName} {transaction.authorLastName}<span className='right'>{transaction.remark}</span></div>
                        <div>{new Date().getTime()}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='container center'>
                <p className='white-text'>Loading project...</p>
            </div>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const transactions = state.firestore.data.transactions
    const transaction = transactions ? transactions[id] : null
    return {
        transaction: transaction,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'transactions' }
    ])
)(TransactionDerails)
