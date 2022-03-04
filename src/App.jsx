import React, { useCallback, useState, useEffect, useRef } from 'react';
import './App.css';

import { Link } from 'react-router-dom';
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
  const walletAddress = `0x49c47865DCf7d32a0a3e1d0bfCfC92C83A3a4F11`;

  const Tabs = (props) => {
    const mainSwitchWallet = () => (
      // <Link to="wallet">
        <button
          onClick={() => {setTab("wallet")}}
          className="tab-button"
          >
             Wallet
        </button>
      // </Link> 
    );

    const mainSwitchVaults = () => (
      // <Link to="vaults">
        <button
          onClick={() => {setTab("vaults")}}
          className="tab-button"
          >
             Vaults
        </button>
      // </Link>
    );

    return (
      <div >
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
    return (
        <li ref={domNode} className="nav-item">
          <div href="#" className="icon-button" onClick={() => setOpen(!open)}>
            <span className="icon-button-chain">{<GLMR_ICON />}</span>
            <span className="chain-name">Moonbeam</span>
            <span className="icon-button-chain">{props.icon}</span>
          </div>
          {open && props.children}
        </li>
    );
  }

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
        <div className="tabs">
          <Tabs />
        </div>
      </div>
      <div className="main-container">
        <Navbar >
          <div className="active-tab">
            Vaults
          </div>
          <div className="connection-items">
            <NavItemChains icon={<Chevron />} >
              <Nav />
            </NavItemChains>
            <div className="wallet" >
                {truncateEthAddress(walletAddress)}
            </div>
          </div>
        </Navbar>
        <Maincontent />
      </div>
    </div>
  );
}
