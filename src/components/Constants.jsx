import { ReactComponent as MovrIcon } from '../assets/icons/moonriver.svg';
import { ReactComponent as MoonbeamIcon } from '../assets/icons/moonbeam.svg';
import { ReactComponent as ChewyIcon } from '../assets/icons/chewy.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/search-icon.svg';
import { ReactComponent as usdcIcon } from '../assets/icons/usdc.svg';
import { ReactComponent as daiIcon } from '../assets/icons/dai.svg';
import { ReactComponent as usdtIcon } from '../assets/icons/usdt.svg';



export const MOVR_ICON = MovrIcon;
export const GLMR_ICON = MoonbeamIcon;
export const CWY_ICON = ChewyIcon;
export const SEARCH_ICON = SearchIcon;
export const USDC = usdcIcon;
export const DAI = daiIcon;
export const USDT = usdtIcon;


export const CoingeckoData = async() => {
    let CgD = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc`)
    .then(response => {return response.json()}).catch(err => {console.log('Error', err)});

    CgD = CgD.map((item) => {
        if (item.id === "usd-coin") {
            return item;
        }
    })

    CgD = CgD.filter(item => (item !== undefined));
    
    console.log("coingecko data is", CgD);

    return (
        CgD.id
    )
}