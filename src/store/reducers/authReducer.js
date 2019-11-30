
const initState = {
    authError: null,
    updateError: null,
    bitCoinWalletBalance: null,
    ethrumbWalletBalance: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login Failed:' + action.err.message
            };
        case 'LOGIN_SUCCESS':
            console.log('login Success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('SIGNOUT Success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup Success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup failed');
            return {
                ...state,
                authError: 'Signup Failed:' + action.err.message
            }
        case 'BALANCE_UPDATED_BITCOIN':
            console.log(action);
            return {
                ...state,
                bitCoinWalletBalance: action.BitcoinWalletbalance

            }
        case 'BALANCE_UPDATED_BITCOIN':
            console.log(action);
            return {
                ...state,
                ethrumbWalletBalance: action.EthereumWalletBalance

            }
        case 'BALANCE_UPDATED_ERROR':
            console.log(action);
            return {
                ...state,
                updateError: 'Update Failed:' + action.err.message
            }
        default:
            return state;
    }
}

export default authReducer;