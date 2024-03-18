import React from 'react'
import './Application.css'

const Application = () => {
  return (
    <section className='application'>

        <h3 className='mobile-app'>Mobile Application</h3>
        <p className='powerful'>Powerful Mobile Application With Plenty of Payment Friendly Features.</p>

        <div className="flex-mobile">
            <p className="text-left">APP DASHBOARD</p>
            <img className='flex-image' src="https://paylance.io/img/1.png" alt="" />
            <ul className="text-right">
                <li>Assets Portfolio</li>
                <li>Analytics & Transactions Tracker</li>
                <li>Modern & Responsive UI</li>
            </ul>
        </div> 
        
        <br/>

        <div className="flex-mobile1">
        <ul className="text-right">
                <li>Secure Transaction</li>
                <li>Send, Recieve and buy</li>
                <li>QR Code payment</li>
            </ul>
            <img className='flex-image' src="https://paylance.io/img/2.png" alt="" />
            <p className="text-left">WALLET</p>
        </div>

        <br/>

        <div className="flex-mobile">
            <p className="text-left">SWAP</p>
            <img className='flex-image' src="https://paylance.io/img/3.png" alt="" />
            <ul className="text-right">
                <li>Convert Your Assets</li>
                <li>Swap Platform</li>
                <li>Market Live Price</li>
            </ul>
        </div> 

        <br/>

        <div className="flex-mobile1">
        <ul className="text-right">
                <li>Send Invoice & Accept Payment</li>
                <li>Safe Payment Link</li>
                <li>Manage Business Payment</li>
                <li>Pay Invoice</li>
            </ul>
            <img className='flex-image' src="https://paylance.io/img/4.png" alt="" />
            <p className="text-left">CREATE INVOICE</p>
        </div>
    </section>
  )
}

export default Application