
const initState = {
    transaction: [
        { 
            transferTo: '',
            accountHolderFirstName: '',
            accountHolderLastName: '',
            amount: '',
            remark: '',
            currencyType: '',
        }
    ]
};

const transactionReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TRANSACTION':
            console.log('transactions', action.transaction);
            return state
        case 'TRANSACTION_ERROR':
            console.log('created transaction Error', action.error);
            return state
        default:
            return state;
    }
}

export default transactionReducer;