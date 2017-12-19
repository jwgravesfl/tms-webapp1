import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/#header">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/world">World Domination</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/#live">Live Music</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/#open">Open Mics</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/#about">About</Link></li>
            </ul>
            <ul className="icons">
                <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Menu
