import React, { Component } from 'react'

class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <p>Made it with <i className="fas fa-heart" style={{ color: 'red' }}></i> in ReactJS by <a href="http://craftersama.com">Julmer Olivero O.</a></p>
                <p>Copyright &copy; 2006 - till Today</p>
            </footer>
        )
    }
}

export default Footer;