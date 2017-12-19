import React from 'react'
import Link from 'gatsby-link'
import Headroom from 'react-headroom'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>The Mad Scientist</strong> <span>- Tampa</span></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>


)

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Header
