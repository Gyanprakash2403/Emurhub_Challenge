import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLink';

import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth, profile } = props;
    // console.log(auth);
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />
    return (
        <nav className="nav-wrapper violet darken-1">
            <div className="container">
                <Link to='/' className="brand-logo">Emburhub <img src={logo} className="App-logo" alt="logo" /></Link>
                { links }
            </div>
        </nav>   
    )
}

const mapStateToProps =  (state) => {    
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);