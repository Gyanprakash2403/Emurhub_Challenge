import authReducer from './authReducer';
import transactionReducer from './transactionReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,   
    transaction: transactionReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer

});


export default rootReducer;