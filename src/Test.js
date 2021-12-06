import React, { useState } from 'react';
import Web3 from 'web3'

const Test = () => {
    const [signedNonce, setSignednonce] = useState()

    const web3 = new Web3(Web3.givenProvider);
    const handleWallet = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        console.log(account)
        var web3 = new Web3(Web3.givenProvider);
        console.log(await web3.eth.getChainId());
    }

    const handleSign = async () => {
        let nonce = 5;

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        const signedNonce = await window.ethereum.request({
            method: 'personal_sign',
            params: [
                `0x${5}`,
                account, "hey"
            ]
        })

        setSignednonce(signedNonce)
        console.log("Signed Nonce", signedNonce)

    }

    return (
        <>
            <button onClick={() => handleWallet()}>
                Connect Wallet
            </button>
            <button onClick={() => handleSign()}>
                Sign a message
            </button>
            <p style={{ fontSize: '12px' }}>Signed nonce is: {signedNonce}</p>
        </>
    )
}

export default Test;