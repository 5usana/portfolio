import React from 'react';
import styled from 'styled-components';
import Img from '../images/landingMobile.png';
import Img2 from '../images/HomePage.png';
import Img3 from '../images/Project2.png';
import Img4 from '../images/Project1.png';
import Img5 from '../images/Quisbee.png';
import NavBar from './NavBar';

const Main = styled.div`
    border-radius: 20px;
    width: 75vw;
	margin: 0 auto;
	margin-bottom: 10px;
	text-align: center;
    object-fit: scale-down;

	&.mobile {
		width: 180px;
	}
`;

const ButtonP5 = styled.button`
    margin-top: 20px;
    margin-left: 20px;
    padding: 12px 25px;
    border: 2px solid #84A59D;
    border-radius: 30px;
    background-color: Transparent;
    transition: .3s;
    color: #84A59D;
    font-size: 12px;
    font-weight: 800;
    text-align: left;
    letter-spacing: 1px;
`;

const ButtonP4 = styled.button`
    margin-top: 20px;
    margin-left: 20px;
    padding: 12px 25px;
    border: 2px solid #84A59D;
    border-radius: 30px;
    background-color: Transparent;
    transition: .3s;
    color: #84A59D;
    font-size: 12px;
    font-weight: 800;
    text-align: left;
    letter-spacing: 1px;
`;

const ButtonP3 = styled.button`
    margin-top: 20px;
    margin-left: 20px;
    padding: 12px 25px;
    border: 2px solid #84A59D;
    border-radius: 30px;
    background-color: Transparent;
    transition: .3s;
    color: #84A59D;
    font-size: 12px;
    font-weight: 800;
    text-align: left;
    letter-spacing: 1px;
`;

const ButtonP2 = styled.button`
    margin-top: 20px;
    margin-left: 20px;
    padding: 12px 25px;
    border: 2px solid #84A59D;
    border-radius: 30px;
    background-color: Transparent;
    transition: .3s;
    color: #84A59D;
    font-size: 12px;
    font-weight: 800;
    text-align: left;
    letter-spacing: 1px;
    `;

const ButtonP1 = styled.button`
    margin-top: 20px;
    margin-left: 20px;
    padding: 12px 25px;
    border: 2px solid #84A59D;
    border-radius: 30px;
    background-color: Transparent;
    transition: .3s;
    color: #84A59D;
    font-size: 12px;
    font-weight: 800;
    text-align: left;
    letter-spacing: 1px;
    `;

const ButtonD = styled.button`
    margin-top: 20px;
    padding: 12px 25px;
    border: 1px solid #F6BD60;
    border-radius: 30px;
    background-color: #F6BD60;
    transition: .3s;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    text-align: left;
    letter-spacing: 1px;
`;    

const ButtonC = styled.button`
    margin-top: 20px;
    padding: 12px 25px;
    border: 1px solid #F6BD60;
    border-radius: 30px;
    background-color: #F6BD60;
    transition: .3s;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    text-align: left;
    letter-spacing: 1px;
`;

const ButtonB = styled.button`
    margin-top: 20px;
    padding: 12px 25px;
    border: 1px solid #F6BD60;
    border-radius: 30px;
    background-color: #F6BD60;
    transition: .3s;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    text-align: left;
    letter-spacing: 1px;
`;

const ButtonA = styled.button`
    margin-top: 20px;
    padding: 12px 25px;
    border: 1px solid #F6BD60;
    border-radius: 30px;
    background-color: #F6BD60;
    transition: .3s;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    text-align: left;
    letter-spacing: 1px;
`;

const Project4 = styled.img`
    object-fit: scale-down;
    background-color: red;
`;

const Project3 = styled.img`
    object-fit: contain;
    background-color: red;
`;

const HeaderOne = styled.h1`
    margin-top: 70px;
`;

function Projects(props) {
    return (
        <> 
            <NavBar />
            <Main>
            <br></br>
                <HeaderOne>Currently working on... Quisbee</HeaderOne>
                <img src={Img5} alt='Quisbee' />
        
                <h3>An educational quiz app for children. This 3-day sprint brought together UXDI, DSI and SEI job seekers divided into teams with representation from each discipline. Look out for updates, we will continue to enhance this app post May's Hackathon..</h3>
                <a rel='noopener noreferrer' href='https://quisbee.netlify.app/' target='blank'>
                <ButtonD>Site</ButtonD>    
                </a>
                <a rel='noopener noreferrer' href='https://github.com/Juicy-Teachers/education_thunder' target='blank'>
                <ButtonP5>Repository</ButtonP5>
                </a>

                <br></br>
                <h1>Word Vomit Blog</h1>
                <Project4 src={Img} alt='Word Vomit Blog' />
        
                <h3>Word Vomit is a one liner blog to document events most worthy of remembrance.  Here you are encouraged to write out your thoughts, of the day in only a line or so without the pressure of filling out an entire page.</h3>
                <a rel='noopener noreferrer' href='https://wvblog.herokuapp.com/' target='blank'>
                <ButtonC>Site</ButtonC>    
                </a>
                <a rel='noopener noreferrer' href='https://github.com/5usana/wvblog' target='blank'>
                <ButtonP4>Repository</ButtonP4>
                </a>

                <h1>BOAT Dashboard</h1>
                <Project3 src={Img2} alt='BOAT Dashboard' />
                <h3>The BOAT Dashboard app was built mimicking a team-client collaborative interaction, leveraging the MERN full-stack for a dashboard application integrating functionality from a custom-made API.</h3>
                <a rel='noopener noreferrer' href='https://boat-dashboard.herokuapp.com/' target='blank'>
                <ButtonB>Site</ButtonB>    
                </a>
                <a rel='noopener noreferrer' href='https://github.com/big-brainers/boat-frontend' target='blank'>
                <ButtonP3>Repository</ButtonP3>
                </a>

                <h1>Unsolicited Advice- Advice Generator</h1>
                <img src={Img3} alt='Unsolicited Advice- Advice Generator' />
                <h3>Unsolicited Advice from friends or strangers can get tiresome so why not let my app decide for you? Don't like the advice you get? That's ok, give it another go and find the adice you came for!</h3>
                <a rel='noopener noreferrer' href='https://unsolicited-advice.herokuapp.com/'  target='blank'>
                <ButtonA>Site</ButtonA> 
                </a>
                <a rel='noopener noreferrer' href='https://github.com/5usana/Unsolicited-Advice'  target='blank'>
                <ButtonP2>Repository</ButtonP2>
                </a>

                <h1>Twin Peaks Trivia</h1>
                <img src={Img4} alt='Twin Peaks Trivia' />
                <h3>If you are a fan of the iconic series Twin Peaks then this 10 question quiz is for you! This is a Self-Scoring Trivia game for my Unit 1 Project!</h3>
                <a rel='noopener noreferrer' href='https://wvblog.herokuapp.com/' target='blank'>
                <ButtonC>Site</ButtonC>    
                </a>
                <a rel='noopener noreferrer' href='https://github.com/big-brainers/boat-frontend' target='blank'>
                <ButtonP1>Repository</ButtonP1>
                </a>
            </Main>
        
        
        </>
    );
}

export default Projects;