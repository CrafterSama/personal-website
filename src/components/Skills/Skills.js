import React, { Component } from 'react';
import SoftSkills from '../../components/SoftSkills';


class Skills extends Component {

    render() {
        const skills = [{
            name: "Tools",
            description: "Visual Studio Code, Sublime Text, Git, Github, Bitbucket, Jira, Trello, etc"
        },
        {
            name: "Languages",
            description: "Javascript, PHP, Pyhon, HTML5, CSS3, SQL, NoSQL, Bash"
        },
        {
            name: "Language Processing",
            description: "Information processing, Information extraction, API manipulation"
        },
        {
            name: "Frameworks and Libraries",
            description: "ReactJS, Redux, Angular2+, Laravel, Django, SASS, LESS, MaterialUI for ReactJS, Bootstrap, Materialize CSS, Bulma CSS, JQuery."
        },
        {
            name: "Database Management",
            description: "Database Design and Management, Data Analysis, MySQL, MongoDB, ORM, Oracle, Mongoose"
        },
        {
            name: "Research and Planning",
            description: "Identifying and Solve problems, Gathering Information, Developing solutions, Calculating results"
        }]

        return (
            <section id="skills" className="tech-skills-section">
                <div className="skills">
                    <h3 className="skills-title">Technical Skills</h3>
                    {skills.map((item) => (
                        <div className="skills-box">
                            <h3 className="skill-title">{item.name}</h3>
                            <p className="skill-description">{item.description}</p>
                        </div>
                    ))}
                    <SoftSkills />
                </div>
            </section>
        );
    }
}

export default Skills;