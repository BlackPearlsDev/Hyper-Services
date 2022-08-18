import React from 'react';
import team from '../../../assets/team.svg';

function AboutUs() {
    return (
        <section id='sectionAbout'>
            <h2>About Us</h2>
            <p id='aboutTxt'>HYPER SERVICES© is a company which proposes its services of accompaniment in your projects. We provide our customers with different offers to allow us to better meet your demands. You will find in <a href="./" id='packageTxt'>our packages</a> (depending on the offer chosen) access to a large number of files shared with the community, modules to simplify your tasks as well as a very powerful editor to realize all your needs. The editor can be used on different devices if your offer allows it.</p>
            <img src={team} alt="" id='teamPhoto'/>
        </section>
    )
}

export default AboutUs;