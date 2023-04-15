import logo from '../../../img/logo.svg';
import './Header.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Header() {
    return (
        <header id="header" className="wrapper">
            <h1 className="site-title">
                <a href="index.html">
                    <img src={logo} alt="Profile" />
                </a>
            </h1>
            <nav>
                <ul>
                    <li>
                        <AnchorLink href="#about">
                            About
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href="#contents">
                            Contents
                        </AnchorLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;