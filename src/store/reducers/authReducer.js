
const initState = {
    authError: null   
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
                authError: null,
                identifier: action.users.identifier,
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
        default:
            return state;
    }
}

export default authReducer;