import React from 'react'

var divStyle = {
    textAlign: 'center',
}

var listStyle = {
    textAlign: 'center',
    listStyleType: 'none',
}

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner" style={ divStyle}>
        <ul className="icons">
                        <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                        <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                    </ul>

            <header className="major">
                <h1>The Mad Scientist</h1>
            </header>
            <div>
                <ul>
                    <li style={ listStyle }>Highly Entertaining Live Music</li>
                    <li style={ listStyle }>Talent Rich Open Mic</li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
