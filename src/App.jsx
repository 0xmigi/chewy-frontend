import React, { useCallback, useState, useEffect, useRef } from 'react';
import './App.css';

import { Link } from 'react-router-dom';
import { useChain } from "react-moralis";

import { ReactComponent as Chevron } from './assets/icons/chevron.svg';
import { MOVR_ICON, GLMR_ICON, CWY_ICON } from './components/Constants';
import truncateEthAddress from 'truncate-eth-address';
import Nav from './components/Nav';
import Maincontent from './components/Maincontent';




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




export default function App(props) {

  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState();
  const [chainIcon, setChainIcon] = useState(<MOVR_ICON />);
  const [chainName, setChainName] = useState("Moonriver");
  const [newChain, setNewChain] = useState();
  const [defaultAccount, setDefaultAccount] = useState("Connect");
  const [errorMessage, setErrorMessage] = useState("Connect");

  useEffect(() => {
    // setChainIcon(props.newChain.chainIcon)
    // setChainName(props.newChain.chainName)
  }, [newChain])

  const Tabs = (props) => {
    const mainSwitchWallet = () => (
      <Link to="wallet" style={{ textDecoration: 'none' }}>
        <button
          onClick={() => {setTab("wallet")}}
          className="tab-button"
          >
             Wallet
        </button>
      </Link> 
    );

    const mainSwitchVaults = () => (
      <Link to="vaults" style={{ textDecoration: 'none' }}>
        <button
          onClick={() => {setTab("vaults")}}
          className="tab-button"
          >
             Vaults
        </button>
      </Link>
    );

    return (
      <div className="tabs">
        {mainSwitchWallet()}
        {mainSwitchVaults()}
      </div>
    )
  }

  const Navbar = (props) => {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    );
  }

  const NavItemChains = (props) => {
    console.log("newChain is", newChain);
    return (
        <li ref={domNode} className="nav-item">
          <div href="#" className="icon-button" onClick={() => setOpen(!open)}>
            <span className="icon-button-chain">{chainIcon}</span>
            <span className="chain-name">{chainName}</span>
            <span className="icon-button-chain">{props.icon}</span>
          </div>
          {open && props.children}
        </li>
    );
  }

    //Injected browser wallet connections EVM chains   <<------------------------------------------------------------->>

    const Chains = () => {
      const { chainId, chain } = useChain();
     
      return() => {
  
        try {
          if (typeof window.ethereum !== undefined && window.ethereum !== "") {
            window.ethereum.request({method: 'eth_requestAccounts'})
  
            if (typeof window.ethereum !== newChain && window.ethereum !== "") {
              window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: newChain }],
              })
              .then(window.ethereum.request({method: 'eth_requestAccounts'})
              .then(result => {
                accountChangedHandler(result[0]);
              }));
            } else {
              window.ethereum.request({method: 'eth_requestAccounts'})
              .then(result => {
                accountChangedHandler(result[0]);
            })};
            const accountChangedHandler =  async (newAccount) => {
              setDefaultAccount(newAccount);
              
              
              console.log(newAccount);
        
              console.log(chainId);
            }
          } else {
  
          }
        
        } catch (e) {
          setErrorMessage('no wallet found');
          console.log(e.message);
        }
      }
  }



  //wallet connections <<------------------------------------------------------------->>

  const metaMaskConnect = () => {
    return (
      <button
        onClick={Chains()} 
        className="wallet"
        >
          {window.ethereum ? truncateEthAddress(defaultAccount) : errorMessage}
      </button>
    );
  };


  let domNode = useClickOutside(() => {
    setOpen(false)
  })

  return (
    <div className="App">
      <div className="side-bar">
        <div className="app-logo">
          <span className="app-icon">{<CWY_ICON />}</span>
          <span className="app-text">chewy</span>
        </div>
          {/* <Tabs /> */}
      </div>
      <div className="main-container">
        <Navbar >
          <div className="active-tab">
            Vaults
          </div>
          <div className="connection-items">
            <NavItemChains icon={<Chevron />} >
              <Nav setNewChain={setNewChain}
                  //  chainIcon={setChainIcon}
                  //  chainName={setChainName}
                   />
            </NavItemChains>
            <div >
                {metaMaskConnect()}
            </div>
          </div>
        </Navbar>
        <Maincontent />
      </div>
    </div>
  );
}
