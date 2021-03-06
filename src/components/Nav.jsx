import React , { useState, useEffect, useRef, useCallback } from 'react';
import './nav.css';
import { CSSTransition } from 'react-transition-group';


import { Link } from 'react-router-dom';
import { MOVR_ICON, GLMR_ICON } from './Constants';

export default function Nav(props) {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const chainIcon = <div><MOVR_ICON/></div>
    const chainName = "Moonriver"
    const dropdownRef = useRef(null);


    const chainSwitchMovr = () => (
        <div to="moonriver">
          <button
            onClick={() => {props.setNewChain("0x505")}}
            className="nav-cta-button"
            >
               Moonriver
          </button>
        </div>
      );

    const chainSwitchGlmr = () => (
        <div to="glmr">
          <button
            onClick={() => {props.setNewChain("0x504")}}
            className="nav-cta-button"
            >
               Moonbeam
          </button>
        </div>
      );

    // const Connection = (props) => {
    //     // <div className="connections">
          
    //     // </div>
    // }

    // const Chains = (props) => {
    //     <div >
    //         <button >
    //            Moonriver
    //         </button>
    //     </div>
    // }

    // const Wallet = (props) => {

    // }

    const calcHeight = (el) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
      }

    const DropdownItem = (props) => {
        return (
            <div href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button-chain">{props.leftIcon}</span>
                {props.children}
            </div>
        );
    }

    

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
            <CSSTransition
            in={activeMenu === 'main'}
            timeout={500}
            className="menu-primary"
            unmountOnExit
            onEnter={calcHeight}
            >
                <div className="menu">
                <DropdownItem
                        leftIcon={<GLMR_ICON />}
                        // goToMenu="evmChains"
                        >
                        <h2>{chainSwitchGlmr()}</h2>
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<MOVR_ICON />}
                        // goToMenu="evmChains"
                        >
                        <h2>{chainSwitchMovr()}</h2>
                    </DropdownItem>
                </div>
            </CSSTransition>
        </div>   
    )
}