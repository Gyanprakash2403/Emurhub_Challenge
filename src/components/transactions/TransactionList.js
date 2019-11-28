import React from "react";

import TransactionSummary from './TransactionSummary';
import { Link } from 'react-router-dom';


const TransactionList = ({ transactions }) => {

    return (
        <div className='project-list section'>
            {transactions && transactions.map(transaction => {
                return (
                    <Link to={'/transaction/' + transaction.id} key={transaction.id}>
                        <TransactionSummary transaction={transaction} />
                    </Link>
                )
            })}
        </div>
    )
}

export default TransactionList;