import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {deposit} from '../../store/actions/authAction';


class Deposit extends Component {
    state = {        
        bitcoinWalletBalance: 0,       
        ethereumWalletId: '',
        currencyType: '',
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
        this.props.deposit(this.state);    
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
                        <label htmlFor='bitcoinWalletBalance'>Deposit</label>
                        <input type='number' id='bitcoinWalletBalance' onChange={(e) => this.handleChange(e)} />
                    </div>  
                    <div className='input-field' htmlFor='currencyType'>                       
                        <select className="browser-default grey-text text-darken-3" id='currencyType' onChange={(e) => this.handleChange(e)}>                     
                            <option value="Bitcoin" defaultValue>Bitcoin</option>
                            <option value="Ethereum">Ethereum</option>
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
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deposit: (dipositeForm) => dispatch(deposit(dipositeForm))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deposit)