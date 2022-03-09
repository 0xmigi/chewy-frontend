import React , { useState, useEffect, useRef, useCallback } from 'react';
import './maincontent.css';
import { Routes, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Vaults from './Vaults.jsx';
import Wallet from './Wallet.jsx';
import Footer from './Footer.jsx';

import { CoingeckoData, SEARCH_ICON, USDC, DAI, USDT, MULTI, UST, ZLK_ICON } from './Constants';
import Onebeam3 from '../assets/icons/1beam.png';

let useClickOutside = (handler) => {
    let domNode = useRef()
  
    useEffect(() => {
      let maybeHandler = (event) => {
        if (domNode.current&&!domNode.current.contains(event.target)) {
          handler();
        }
      };
      document.addEventListener("mousedown", maybeHandler);
  
      return () => {
        document.removeEventListener("mousedown", maybeHandler)
      }
    });
  
    return domNode
  };


export default function Nav(props) {

    // const dropdownRef = useRef(null);
    const [open, setOpen] = useState();
    const [depositDropdown, setDepositDropdown] = useState(false);
    const [displaySearch, setDisplaySearch] = useState();
    const dai = <div className="token-types"><DAI height={"25px"} width={"25px"}/></div>
    const usdc = <div className="token-types"><USDC height={"25px"} width={"25px"}/></div>
    const usdt = <div className="token-types"><USDT height={"25px"} width={"25px"}/></div>
    const multi = <div className="token-types"><MULTI height={"25px"} width={"25px"}/></div>
    const ust = <div className="token-types"><UST height={"25px"} width={"25px"}/></div>
    const zkl = <div className="token-types"><ZLK_ICON height={"25px"} width={"25px"}/></div>
    const beam3 = <div className="token-types"><img src={Onebeam3} height={"25px"} width={"25px"}/></div>

    const ListofPools = (props) => {

        const mapItems = [
            {icon: [dai, usdc, usdt], name: "flare3POOL"},
            {icon: multi, name: "flare3ANY"},
            {icon: ust, name: "flare3UST"},
            {icon: zkl, name: "STELLA"},
            {icon: zkl, name: "ZLK"},
            {icon: beam3, name: "1beam3POOL"},
            {icon: [beam3, usdt], name: "1beam3BUSD"},
            {icon: ust, name: "3CRV"}
        ]

        const mappedItems = mapItems.map((item, index) => {
            if (index === open) {
              return (
                <li key={index} style={{ listStyle: 'none' }} onClick={() => {setOpen(index)}}>
                    <div className="pool-dropdown" >
                        <div className="pool-overview">
                            <div className="pool-icon">{item.icon}</div>
                                <div className="name">
                                    {item.name}
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
                        <div className="dropdown-middle">
                            <input className="deposit-input" type="text" placeholder="0.0"/>
                            <input className="deposit-input" type="text" placeholder="0.0"/>
                        </div>
                        <div className="dropdown-bottom">
                            <button className="approve-withdraw">
                                Approve
                            </button>
                            <button className="approve-withdraw">
                                Withdraw
                            </button>
                        </div>
                    </div>
                </li>
                )
            } else {
              return (
                <li key={index} style={{ listStyle: 'none' }} onClick={() => {setOpen(index)}}>
                    <div className="pool-item" >
                        <div className="pool-overview">
                            <div className="pool-icon">{item.icon}</div>
                                <div className="name">
                                    {item.name}
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
                    </div>
                </li>
              )  
            }
          }
        )

        return (
        <ul ref={domNode} className="pools">
                {mappedItems}
        </ul>
        );
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


    let domNode = useClickOutside(() => {
    setOpen(false)
    })

    return (
        // <div className="about-chainBox">
        <Main >
            <div className="filter-container">
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
                    // onChange={displaySearch}
                    />
                </div>   
                <div className="filter">
                    <div >name</div><div >name</div><div >name</div><div >name</div><div >name</div><div >holdings</div> 
                </div>
            </div>
            <div className="opportunities">
                    <ListofPools />
            </div>
        </Main>
    );
}