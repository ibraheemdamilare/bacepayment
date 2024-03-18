import React from 'react'
import './HomeHeader.css'

const HomeHeader = () => {
  return (
    <>
        <div className="home-header">
            <div className="text-container">
                <h1 className='bace'>Bace Payment</h1>
                <h2 className='bace-text'>Global Payment Solution</h2>
                <p className="body-text">Paylance is a global payment service provider that integrates Fiat, Crypto, and Remittance payments into one ecosystem. Paylance users & merchants can send business invoices to their clients for official payments. Crypto can be used like fiat through Paylance's Virtual or Physical Visacard</p>
            </div>
            <img src="https://paylance.io/img/Paylance.png" alt="" />
        </div>
    </>
  )
}

export default HomeHeader