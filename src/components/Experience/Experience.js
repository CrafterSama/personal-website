import React, { Component } from 'react';

import Skills from '../../components/Skills';

class Experience extends Component {

    render() {
        const experiences = [{
            position: "Full Stack Developer and Project Manager Officer",
            company: "Softars",
            from: "01/08/2015",
            to: "",
            presentDay: true,
            remote: true,
            country: "Venezuela",
            state: "Zulia",
            city: "Ciudad Ojeda",
            tasks: "I Develop Web Apps, Web Systems and SAAS products with technologies like: HTML5, CSS3, Javascript, AngularJS, Angular2+, ReactJS, Laravel, NodeJS, ExpressJS, Bootstrap, MaterialUI, MeteorJS and I program all the Task for the team with Attlasian Jira Software.",
            uuid: ""
        },
        {
            position: "Full Stack Developer",
            company: "Freelance",
            from: "01/01/2007",
            to: "",
            presentDay: true,
            remote: true,
            country: "Venezuela",
            state: "",
            city: "",
            tasks: "I work like a Freelance mostly as a Fullstack Developer, Making Web App of E-commerce, Delivery Systems, Hospital Web Software and Website using always new technologies always choose the better option to develop the client requirements. Normally I always use HTML5, CSS3, Javascript, PHP, Python, Laravel, ReactJS with or without Redux, Django, NodeJS, ExpressJS and many layouts frameworks systems, including the use of MaterialUI for ReactJS, I can handle the Terminal and BASH Language, I have knowledge and always use git, I handle Package Managers like Gulp, Yarn, NPM, Composer, Pip, etc., and also I can handle Linux, Mac and Windows Platforms.",
            uuid: ""
        },
        {
            position: "Frontend Developer",
            company: "Minami Digital",
            from: "01/12/2017",
            to: "15/03/2019",
            presentDay: false,
            remote: true,
            country: "Mexico",
            state: "Mexico",
            city: "DF",
            tasks: "My work here has based in made layouts with HTML5, CSS3 and Javascript, I have used other technologies like: D3.JS, Bootstrap, Materialize CSS, Bulma CSS, and ReactJS.",
            uuid: ""
        },
        {
            position: "Computer equipment operator",
            company: "Social Security Institute of Venezuela",
            from: "01/09/2008",
            to: "01/09/2015",
            presentDay: false,
            remote: false,
            country: "Venezuela",
            state: "Zulia",
            city: "Maracaibo",
            tasks: "I was work here like a User Support and Web Developer, I has made a Web System to automate some task in some hospitals and drugstores, this Web System was made with HTML5, CSS3, JQuery, Javascript, PHP and SQL.",
            uuid: ""
        },
        {
            position: "System Analyst",
            company: "Inversiones Recreativas de Occidente, C.A",
            from: "01/10/2007",
            to: "01/08/2008",
            presentDay: false,
            remote: false,
            country: "Venezuela",
            state: "Zulia",
            city: "Maracaibo",
            tasks: "I was work here like User Support in Hardware and Systems, I Supported systems with technologies like HTML5, CSS3, Javascript, PHP, Oracle and MSSQL, and DevOps tasks with Microsoft Technologies.",
            uuid: ""
        }]
        return (
            <section id="work-experience" className="experience-section">
                <div className="container">
                    <div className="exp-skills-columns">
                        <div className="experiences">
                            <h3 className="experience-title">Experience</h3>
                            <div className="experience-line"></div>
                            {experiences.map((item, key) => (
                                <div className="item-box">
                                    <div className={`experience-box box-${key + 1}`}>
                                        <h3 className="exp-position">{item.position}</h3>
                                        <h4 className="exp-company">{item.company}</h4>
                                        <div className="exp-time">
                                            <span className="exp-from">{item.from}</span> - <span className="exp-to">{item.presentDay ? 'Present' : item.to}</span>
                                        </div>
                                        <div className="exp-place">
                                            <span className="exp-remote">{item.remote ? 'Remote - ' : ''}</span><span className="exp-country">{item.country ? item.country : ''}</span><span className="exp-state">{item.state ? `, ${item.state}` : ''}</span><span className="exp-city">{item.city ? `, ${item.city}` : ''}</span>
                                        </div>
                                        <div className="experience-modal">
                                            <h5 className="modal-title">Tasks / Achievements</h5>
                                            <p className="exp-tasks">{item.tasks}</p>
                                        </div>
                                    </div>
                                    <span className="experience-dot"></span>
                                </div>
                            ))}
                        </div>
                        <Skills />
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;