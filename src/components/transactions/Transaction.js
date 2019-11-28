import React, { Component } from 'react';
import createTransaction from '../../store/actions/transactionAction';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class Transaction extends Component {
    state = {
        transferTo: '',
        accountHolderFirstName: '',
        accountHolderLastName: '',
        amount: '',
        remark: '',
        currencyType: 'Bitcoin',
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
                        <label htmlFor='transferTo'>Account Number</label>
                        <input type="number" maxLength="11" id='transferTo' onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='accountHolderFirstName'>First Name</label>
                        <input type='text' id='accountHolderFirstName' onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='accountHolderLastName'>Last Name</label>
                        <input type='text' id='accountHolderLastName' onChange={(e) => this.handleChange(e)} />
                    </div>                   
                    <div className='input-field' >
                        <label htmlFor='amount'>Amount</label>
                        <input type='number' id='amount' onChange={(e) => this.handleChange(e)} />                      
                    </div>
                    <div className='input-field' htmlFor='currencyType'>                       
                        <select className="browser-default grey-text text-darken-3" id='currencyType' onChange={(e) => this.handleChange(e)}>                     
                            <option value="Bitcoin">Bitcoin</option>
                            <option value="Ethereum">Ethereum</option>
                        </select>          
                    </div>
                    <div className='input-field'>
                        <label htmlFor='remark'>Remark</label>
                        <input type='text' id='remark' onChange={(e) => this.handleChange(e)} />
                    </div>         
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>Create</button>
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
