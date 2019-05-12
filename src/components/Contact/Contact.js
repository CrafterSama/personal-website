import React, { Component } from 'react'
import SocialContact from '../common/SocialContact';

class Contact extends Component {
    render() {
        const socialProps = {
            email: {
                name: 'jolivero.03[at]gmail.com',
                url: 'jolivero.03@gmail.com'
            },
            twitter: {
                name: 'twitter.com/craftersama',
                url: 'https://twitter.com/craftersama'
            },
            github: {
                name: 'github.com/craftersama',
                url: 'https://github.com/craftersama'
            },
            instagram: {
                name: 'instagram.com/craftersama',
                url: 'https://instagram.com/craftersama'
            },
            facebook: {
                name: 'Julmer Olivero',
                url: 'https://www.facebook.com/craftersama'
            },
            linkedin: {
                name: 'linkedin.com/in/julmerolivero',
                url: 'https://www.linkedin.com/in/julmerolivero/'
            },
            mobile: {
                name: '+584146718223',
                url: '+584146718223'
            },
            skype: {
                name: 'julmer.olivero',
                url: 'julmer.olivero'
            }
        }
        return (
            <section id="contact-me" className="contact-section">
                <SocialContact {...socialProps} />
                <div className="bottom-cloud"></div>
            </section>
        )
    }
}

export default Contact;