import React , { useState, useEffect, useRef, useCallback } from 'react';
import './maincontent.css';
import { Routes, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import SearchIcon from '@mui/icons-material/Search';
import SwapVertIcon from '@mui/icons-material/SwapVert';

import Vaults from './Vaults.jsx';
import Wallet from './Wallet.jsx';
import Footer from './Footer.jsx';

import { CoingeckoData, MOVR_ICON, GLMR_ICON, SEARCH_ICON, USDC, DAI, USDT, MULTI, UST, ZLK, BEAM3, SOLAR2KSM, SOLAR3FRAX, SOLAR3POOL, FRAX, WBTC, WETH, STELLA } from './Constants';


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
    let activeChain = props.newChain;
    const movr = <div className="token-types"><MOVR_ICON height={"25px"} width={"25px"}/></div>
    const dai = <div className="token-types"><DAI height={"25px"} width={"25px"}/></div>
    const usdc = <div className="token-types"><USDC height={"25px"} width={"25px"}/></div>
    const usdt = <div className="token-types"><USDT height={"25px"} width={"25px"}/></div>
    const multi = <div className="token-types"><MULTI height={"25px"} width={"25px"}/></div>
    const ust = <div className="token-types"><UST height={"25px"} width={"25px"}/></div>
    const zlk = <div className="token-types"><ZLK height={"25px"} width={"25px"}/></div>
    const beam3 = <div className="token-types"><img src={BEAM3} height={"25px"} width={"25px"}/></div>
    const solar2ksm = <div className="token-types"><img src={SOLAR2KSM} height={"25px"} /></div>
    const solar3frax = <div className="token-types"><img src={SOLAR3FRAX} height={"25px"} width={"25px"}/></div>
    const solar3pool = <div className="token-types"><img src={SOLAR3POOL} height={"25px"} /></div>
    const frax = <div className="token-types"><img src={FRAX} height={"25px"} /></div>
    const wbtc = <div className="token-types"><img src={WBTC} height={"25px"} /></div>
    const weth = <div className="token-types"><img src={WETH} height={"25px"} /></div>
    const stella = <div className="token-types"><img src={STELLA} height={"25px"} /></div>
    


    const mapItemsMovr = [
        {icon: movr, name: "MOVR"},
        {icon: weth, name: "WETH"},
        {icon: wbtc, name: "WBTC"},
        {icon: usdc, name: "USDC"},
        {icon: frax, name: "FRAX"},
        {icon: solar2ksm, name: "solar2KSM"},
        {icon: solar3pool, name: "solar3POOL"},
        {icon: solar3frax, name: "solar3FRAX", apy: "14.22%", tvl: "$1.2m"}
    ]
    const mapItemsGlmr = [
        {icon: [dai, usdc, usdt], name: "flare3POOL"},
        {icon: multi, name: "flare3ANY"},
        {icon: ust, name: "flare3UST"},
        {icon: stella, name: "STELLA"},
        {icon: zlk, name: "ZLK"},
        {icon: beam3, name: "1beam3POOL"},
        {icon: [beam3, usdt], name: "1beam3BUSD"},
        {icon: ust, name: "3CRV", apy: "14.22%", tvl: "$1.2m"}
    ]

    const [mapItems, setMapItems] = useState(mapItemsMovr);
    const [open, setOpen] = useState();
    const [balance, setBalance] = useState("0.0");
    const [deposited, setDeposited] = useState("0.0");
    const [depositDropdown, setDepositDropdown] = useState(false);
    const [displaySearch, setDisplaySearch] = useState();

    const ListofPools = (props) => {


        const mappedItems = mapItems.map((item, index) => {
            if (index === open) {
              return (
                <li key={index} style={{ listStyle: 'none' }} onClick={() => {setOpen(index)}}>
                    <div className="pool-dropdown" >
                        <div className="pool-overview">
                            <div className="pool-icon">
                                {item.icon}
                            </div>
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
                            <div className="pool-balance">
                                balance: {balance} {item.name}
                                <div className="max-input">MAX</div>
                                <input className="deposit-input" type="text" placeholder="0.0"/>
                            </div>
                            <div className="pool-balance">
                                deposited: {deposited} {item.name}
                                <div className="max-input">MAX</div>
                                <input className="deposit-input" type="text" placeholder="0.0"/>
                            </div>
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
                            <div className="pool-icon">
                                {item.icon}
                            </div>
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

    useEffect(() => {
        if (activeChain === "0x505") {
            setMapItems(mapItemsMovr);
            console.log("newChain is ", props.newChain)
        } else if (activeChain === "0x504") {
            setMapItems(mapItemsGlmr);
            console.log("no chainID has arrived")
        }
        return () => {
          
        }
      }, [props.newChain]);


    return (
        <Main >
            <div className="filter-container">
                <div className="staking-page">
                Staking opportunities
                </div>
                <div className="search-bar">
                    <div className="placeholder-icon" ><SearchIcon/></div>
                    <input className="search-input"
                    type="text"
                    // placeholder={"Search"}
                    // onChange={displaySearch}
                    />
                </div>   
                <div className="filter">
                    <div ></div>
                    <div className="order">
                        <SwapVertIcon sx={{ fontSize: 15 }}/> 
                        name
                    </div>
                    <div className="order">
                        <SwapVertIcon sx={{ fontSize: 15 }}/> 
                        APY
                    </div>
                    <div className="order">
                        <SwapVertIcon sx={{ fontSize: 15 }}/>
                        TVL
                    </div>
                    <div className="order">
                        <SwapVertIcon sx={{ fontSize: 15 }}/>
                        wallet
                    </div>
                    <div className="order">.
                        {/* <SwapVertIcon sx={{ fontSize: 15 }}/>
                        holdings */}
                    </div> 
                </div> 
            </div>
            <div className="opportunities">
                    <ListofPools />
            </div>
        </Main>
    );
}