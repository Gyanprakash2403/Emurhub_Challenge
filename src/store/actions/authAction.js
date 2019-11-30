export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(res => {
            dispatch({ type: 'LOGIN_SUCCESS'});
        }).catch(err => {
            dispatch({ type: 'LOGIN_ERROR', err });
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'})
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();        
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res) => {
            let uid = res.user.uid;
            firestore.collection('users').doc(res.user.uid).set({
                identifier: res.user.uid,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
                derscription: newUser.derscription,
                bitcoinWalletBalance: newUser.bitcoinWalletBalance,
                maxAmount: newUser.maxAmount,               
            }).then(() => {
                firestore.collection('BitcoinWallet').add({
                    BitcoinWalletId: uid + Math.random(),
                    BitcoinWalletbalance: newUser.bitcoinWalletBalance
    
                }).then(() => {
                    return firestore.collection('EthereumWallet').add({
                        EthereumWalletId: uid + Math.random(),
                        EthereumWalletBalance: newUser.ethereumWalletIdBalance
                    })
                })
            })
        })      
        .then(() => {            
            dispatch({ type: 'SIGNUP_SUCCESS'})
        })
        .catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err})
        })
    }
}

export const deposit = (updateForm) => {
    console.log(updateForm);
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection("users").doc(authorId).set({
            ...profile,
            bitcoinWalletBalance: Number(profile.bitcoinWalletBalance) + Number(updateForm.bitcoinWalletBalance),
            currencyType: updateForm.currencyType
        })
        .then(function() {
            console.log("BALANCE_UPDATED!");
            dispatch({ type: 'BALANCE_UPDATED' });
        })
        .catch(function(error) {
            dispatch({ type: 'BALANCE_UPDATED_ERROR' }, error);
        });    
    }
    
}