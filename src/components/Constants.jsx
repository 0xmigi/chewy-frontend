import { ReactComponent as MovrIcon } from '../assets/icons/moonriver.svg';
import { ReactComponent as MoonbeamIcon } from '../assets/icons/moonbeam.svg';
import { ReactComponent as ChewyIcon } from '../assets/icons/chewy.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/search-icon.svg';
import { ReactComponent as usdcIcon } from '../assets/icons/usdc.svg';
import { ReactComponent as daiIcon } from '../assets/icons/dai.svg';
import { ReactComponent as usdtIcon } from '../assets/icons/usdt.svg';
import { ReactComponent as multiIcon } from '../assets/icons/multichain.svg';
import { ReactComponent as ustIcon } from '../assets/icons/ust.svg';
import { ReactComponent as zenlinkIcon } from '../assets/icons/zenlink.svg';

import Onebeam3 from '../assets/icons/1beam.png';
import solar2ksm from '../assets/icons/solar2ksm.png';
import solar3frax from '../assets/icons/solar3frax.png';
import solar3POOL from '../assets/icons/solar3POOL.png';
import frax from '../assets/icons/frax.png';
import wbtc from '../assets/icons/wbtc.png';
import weth from '../assets/icons/weth.png';
import stella from '../assets/icons/stella.png';




export const MOVR_ICON = MovrIcon;
export const GLMR_ICON = MoonbeamIcon;
export const CWY_ICON = ChewyIcon;
export const SEARCH_ICON = SearchIcon;
export const USDC = usdcIcon;
export const DAI = daiIcon;
export const USDT = usdtIcon;
export const MULTI = multiIcon;
export const UST = ustIcon;
export const ZLK = zenlinkIcon;
export const BEAM3 = Onebeam3;
export const SOLAR2KSM = solar2ksm;
export const SOLAR3FRAX = solar3frax;
export const SOLAR3POOL = solar3POOL;
export const FRAX = frax;
export const WBTC = wbtc;
export const WETH = weth;
export const STELLA = stella;















// export const CoingeckoData = async() => {
//     let CgD = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc`)
//     .then(response => {return response.json()}).catch(err => {console.log('Error', err)});

//     CgD = CgD.map((item) => {
//         if (item.id === "usd-coin") {
//             return item;
//         }
//     })

//     CgD = CgD.filter(item => (item !== undefined));
    
//     console.log("coingecko data is", CgD);

//     return (
//         CgD.id
//     )
// }