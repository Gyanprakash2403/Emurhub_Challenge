import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';

const SignedInLinks = (props) => {
    return (
        <ul className='right'>          
            <li>
                <NavLink to='/transactions' >Transactions</NavLink>
            </li>
            <li>
              <a onClick={props.signOut}>Log Out</a>
            </li>
            <li>
                <NavLink to='/' className='btn btn-floating pink lighten-1'>{props.profile.initials}</NavLink>
            </li>
            <li>
                <NavLink to='/' className='lighten-1'>Balance: {props.profile.balance}</NavLink>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}


export default connect(null, mapDispatchToProps)(SignedInLinks);