import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'
import { Image, Modal, Container } from 'semantic-ui-react' 

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

var listStyle = {
    textAlign: 'center',
    listStyleType: 'none',
}

var headerStyle = {
    textAlign: 'center',
    width: '100%',
}

class HomeIndex extends React.Component {
    render() {


        return (
            <div>
                <Helmet>
                    <title>The Mad Scientist - Tampa</title>
                    <meta name="description" content={'Band and Open Mic Services'} />
                </Helmet>
            
                <Banner />

                <div id="main">
                    <section className="tiles">
                        <article id="world" style={{backgroundImage: `url(${pic01})`}}>
                            <header style={ headerStyle } className="major">
                                <h3>World Domination</h3>
                                <p>Step by Step Guide</p>
                            </header>
                            <Link to="/world" className="link primary"></Link>
                            
                        </article>
                        <article id="live" style={{backgroundImage: `url(${pic02})`}}>
                            <header style={ headerStyle } className="major">
                                <h3>Live Music</h3>
                                <ul>
                                    <li style={ listStyle }>Highly Entertaining</li>
                                    <li style={ listStyle }>Loyal Following</li>
                                </ul>
                            </header>
                            <Link to="/#" className="link primary"></Link>
                        </article>
                        <article id="open" style={{backgroundImage: `url(${pic03})`}}>
                            <header style={ headerStyle } className="major">
                                <h3>Open Mics</h3>
                                <li style={ listStyle }>Perform for Music Lovers</li>
                                <li style={ listStyle }>Full Setup Available</li>
                                <li style={ listStyle }>Solo, Duo or Full Band</li>
                                <li style={ listStyle }>Welcoming and Well Lead</li>
                            </header>
                            <Link to="/#" className="link primary"></Link>
                        </article>
                        <article id="about" style={{backgroundImage: `url(${pic04})`}}>
                            <header style={ headerStyle }className="major">
                                <h3>About</h3>
                                <p>The Mad Scientist</p>
                            </header>
                            <Link to="/#" className="link primary"></Link>
                        </article>
                    </section>
                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`