import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {signIn, signUp} from '../../store/actions/authAction';


class SignUp extends Component {
    state = {
        identifier: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',       
        address: '',
        zipcode: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Sign Up</h5>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' id='firstName' onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' id='lastName' onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='address'>Address</label>
                        <input type='text' id='address' onChange={(e) => this.handleChange(e)} />
                    </div>                   
                    <div className='input-field'>
                        <label htmlFor='zipcode'>Zip Code</label>
                        <input type='text' id='zipcode' onChange={(e) => this.handleChange(e)} />
                    </div>  
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
                    </div>
                    <div className='red-text center'>
                        {authError ? <p>{authError}</p> : null}
                    </div>    
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)