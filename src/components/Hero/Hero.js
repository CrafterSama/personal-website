import React, { Component } from 'react'
import rocketSVG from '../../static/images/rocket.svg';
import avatar from '../../static/images/new-avatar.jpg';

import TopCloud from '../common/Clouds/TopCloud';

class Hero extends Component {
    constructor(props) {
        super(props);
        this.headerBgOne = React.createRef();
        this.headerBgTwo = React.createRef();
    }

    componentDidMount() {
        setTimeout(
            function () {
                this.headerBgOne.current.classList.remove('fadeInRightLarge');
                this.headerBgTwo.current.classList.remove('fadeInLeftLarge');
            }.bind(this),
            1200
        );
    }

    render() {
        const hero = {
            name: "Julmer Olivero",
            position: "Semi-Senior Full Stack Web Developer",
            slogan: "From the Frontend to the Backend without restrictions!",
            description: "Principally, I am a Father and Husband, but in my work time, I am a Full Stack Developer with years of experience. Last 4 years, I have worked mainly as a Frontend Developer, but working with Backend is not a problem to me. My specialities are Javascript, ReactJS, Redux, SASS/CSS, HTML5, PHP, Laravel, SQL and NoSQL Databases, but I can handle any work needed as I am constantly learning and upgrading my skills with new languages and frameworks and new programming challenges."
        }
        return (
            <header id="about-me" className="hero">
                <div className="middle-bg-one animated fadeInRightLarge" ref={this.headerBgOne}></div>
                <div className="middle-bg-two animated fadeInLeftLarge" ref={this.headerBgTwo}></div>
                <div className="header-body text-center">
                    <figure className="about-picture animated fadeInUp delay-800ms">
                        <img className="picture-profile" src={avatar} alt="Julmer Olivero" />
                    </figure>
                    <h1 className="header-title animated fadeInUp delay-1s">
                        {hero.name}
                    </h1>
                    <div className="hero-body">
                        <div className="floating-description animated fadeInDown">
                            <div className="subtitle-hero animated float slow-motion infinite">
                                <h2 className="subtitle animated fadeInUp delay-600ms">{hero.position}</h2>
                                <h4 className="small animated fadeInUp delay-800ms">{hero.slogan}</h4>
                                <p className="animated fadeInDown delay-1s">{hero.description}</p>
                                <div className="subtitle-rocket animated fadeInDownRotate delay-1s">
                                    <img className="animated slower infinite floatingRocket" src={rocketSVG} alt="Rocket" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <TopCloud />
                </div>
            </header>
        )
    }
}

export default Hero;
