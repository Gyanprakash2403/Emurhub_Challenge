import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {deposit} from '../../store/actions/authAction';


class Deposit extends Component {
    state = {        
        depositBalance: 0,       
        ethereumWalletId: '',
        currencyType: '1',
        ethereumWalletIdBalance: 0,
        maxAmount: 5000,
        password:'',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {BitcoinWallet, EthereumWallet } = this.props;    
        let updateForm = {
            ...this.state,
            bitCoinWalletId: BitcoinWallet[0].id,
            ethereumWalletId: EthereumWallet[0].id
        }
        this.props.deposit(updateForm);    
        //console.log(this.state);
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/' />
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Sign Up</h5>
                    <div className='input-field'>
                        <label htmlFor='depositBalance'>Deposit</label>
                        <input type='number' id='depositBalance' onChange={(e) => this.handleChange(e)} />
                    </div>  
                    <div className='input-field' htmlFor='currencyType'>                       
                        <select className="browser-default grey-text text-darken-3" id='currencyType' onChange={(e) => this.handleChange(e)}>                     
                            <option value="1">Bitcoin</option>
                            <option value="2">Ethereum</option>
                        </select>          
                    </div>                 
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>Deposit</button>
                    </div>
               
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {  
    return {
        auth: state.firebase.auth,
        BitcoinWallet: state.firestore.ordered.BitcoinWallet,
        EthereumWallet: state.firestore.ordered.EthereumWallet
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deposit: (dipositeForm) => dispatch(deposit(dipositeForm))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'BitcoinWallet'},
        { collection: 'EthereumWallet'}
    ])
)(Deposit);