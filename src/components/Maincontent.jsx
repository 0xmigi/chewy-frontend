import React , { useState, useEffect, useRef, useCallback } from 'react';
import './maincontent.css';
import { Routes, Route } from 'react-router-dom';

import Vaults from './Vaults.jsx';
import Wallet from './Wallet.jsx';
import Footer from './Footer.jsx';

import { CoingeckoData, SEARCH_ICON, USDC, DAI, USDT } from './Constants';


export default function Nav(props) {

    const [displaySearch, setDisplaySearch] = useState();
    const dai = <div className="token-types"><DAI height={"25px"} width={"25px"}/></div>
    const usdc = <div className="token-types"><USDC height={"25px"} width={"25px"}/></div>
    const usdt = <div className="token-types"><USDT height={"25px"} width={"25px"}/></div>

    function ListofPools(props) {

        {CoingeckoData()}

        return (
          <div className="pool-item" onClick={setDisplaySearch}>
            <div className="pool-icon">{props.leftIcon}</div>
            {props.children}
          </div>
        );
    }

    const PoolBuilder = (props) => {

    }

    const flare3POOL = (props) => {
        return (
            <div className="pool-dropdown">
                <div className="name">
                    flare3POOL
                </div>
                <div className="apy">
                    60.81%
                </div>
                <div className="tvl">
                    $0
                </div>
                <div className="available-deposit">
                    -
                </div>
                <button className="deposit">
                    Deposit
                </button>
            </div>
        )
    }

    const Main = (props) => {

        return (
          <nav className="main-content">
            <div className="main">
                <ul className="main-list">{props.children}</ul>
            </div>
            <Footer />
          </nav>
        );
      }


    return (
        // <div className="about-chainBox">
        <Main >
            <div >
                <div className="staking-page">
                Staking opportunities
                {/* <Routes>
                    <Route path="wallet" element={<Wallet />} />
                    <Route path="vaults" element={<Vaults />}/>
                    <Route path="home" element={"ayo"} />
                    <Route path="" element={<div className="about-chain">Chain history</div>}/>
                </Routes> */}
                </div>
                <div className="search-bar">
                    <input className="search-input"
                    type="text"
                    // placeholder={() => {<SEARCH_ICON/>}}
                    onChange={displaySearch}
                    />
                </div>   
            </div>
            <div className="opportunities">
                    <ul className="pools">
                        <ListofPools leftIcon={[dai, usdc, usdt]}>{flare3POOL()}</ListofPools>
                        

                    </ul>
            </div>
        </Main>
    );
}