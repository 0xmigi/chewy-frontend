import './footer.css';
import discordIcon from '../assets/icons/cwy-discord.svg';
import twitterIcon from '../assets/icons/cwy-twitter.svg';
import githubIcon from '../assets/icons/cwy-github.svg';


export default function Footer(props) {
    const DISCORD_LINK = `https://discord.gg/V66AEzxZaY`;
    const TWITTER_LINK = `https://twitter.com/cwydotmoney`;
    const GITHUB_LINK = `https://github.com/0xRuski`;
    const GOV_LINK = ``;
    const DOCS_LINK = ``;


    return (
        <div className="socails">
        <a
            href={TWITTER_LINK}
            target={twitterIcon}
            rel="noreferrer"
            >
                {<img href={TWITTER_LINK} alt="Twitter Logo" className="twitter-logo" src={twitterIcon} />}
        </a>
        <a
            href={DISCORD_LINK}
            target={discordIcon}
            rel="noreferrer"
            >
                {<img href={DISCORD_LINK} alt="Discord Logo" className="discord-logo" src={discordIcon} />}
        </a>
        <a
            href={GITHUB_LINK}
            target={githubIcon}
            rel="noreferrer"
            >
                {<img href={GITHUB_LINK} alt="Github Logo" className="github-logo" src={githubIcon} />}
        </a>
        <div className="external-docs">
            <div >
              Governance forum  
            </div>
            <div >
                Docs
            </div>
        </div>
    </div>
    );
  }