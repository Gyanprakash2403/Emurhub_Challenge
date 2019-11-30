import React from "react";
import { NavLink } from 'react-router-dom';


const Notifications = (props) => {
    const { BitcoinWallet, EthereumWallet } = props;
    let layout, BitcoinWalletBalance, EthereumWalletBalance;
    if (BitcoinWallet && EthereumWallet) {
        BitcoinWalletBalance = BitcoinWallet[0].BitcoinWalletbalance
        EthereumWalletBalance = EthereumWallet[0].EthereumWalletBalance
    }
    return (
        <div className='section'>
            <div className="card z-depth-0 balance-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title ">Bitcoin Wallet Balcne: {BitcoinWalletBalance}</span>

                </div>
            </div>
            <div className="card z-depth-0 balance-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title ">Ethereum Wallet Balcne: {EthereumWalletBalance}</span>

                </div>
            </div>
        </div>
    )
}

export default Notifications;