import React from 'react';

const TransactionSummary = ({ transaction }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title ">{transaction.amount}</span>
                <p>Transaction by {transaction.authorFirstName + " " + transaction.authorLastName}</p>
                <p className="grey-text"></p>
            </div>
        </div>
    )
}

export default TransactionSummary;