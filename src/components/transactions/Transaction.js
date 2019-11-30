import React, { Component } from 'react';
import createTransaction from '../../store/actions/transactionAction';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class Transaction extends Component {
    state = {
        identifire: '',
        currencyAmount: '',
        currencyType: '',
        sourceId: '',
        targetUserName: '',
        targetUserId: '',
        timestampCreated: '',
        timestampProcessed: '',
        state: '',
        remark: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        this.props.createTransaction(this.state)
    }

    render() {     
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />  
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Fund Transfer</h5>
                    <div className='input-field'>
                        <label htmlFor='currencyAmount'>Currency Account</label>
                        <input type="number" maxLength="11" id='currencyAmount' onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div className='input-field' htmlFor='currencyType'>                       
                        <select className="browser-default grey-text text-darken-3" id='currencyType' onChange={(e) => this.handleChange(e)}>                     
                            <option value="Bitcoin" defaultValue>Bitcoin</option>
                            <option value="Ethereum">Ethereum</option>
                        </select>          
                    </div>
                    <div className='input-field'>
                        <label htmlFor='targetUserName'>Payee Name</label>
                        <input type='text' id='targetUserName' onChange={(e) => this.handleChange(e)} />
                    </div>     
                    <div className='input-field'>
                        <label htmlFor='targetUserId'>Transfer To Account</label>
                        <input type='text' id='targetUserId' onChange={(e) => this.handleChange(e)} />
                    </div>                    
                    <div className='input-field'>
                        <label htmlFor='remark'>Remark</label>
                        <input type='text' id='remark' onChange={(e) => this.handleChange(e)} />
                    </div>         
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>Transfer</button>
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
        createTransaction: (transaction) => dispatch(createTransaction(transaction))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);;
