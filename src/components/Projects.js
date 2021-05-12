import React from 'react';
import styled from 'styled-components';
import Img from '../images/landingMobile.png';
import Img2 from '../images/HomePage.png';
import Img3 from '../images/Project2.png';
import Img4 from '../images/Project1.png';

const Main = styled.div`
    border-radius: 20px;
    width: 650px;
	margin: 0 auto;
	margin-bottom: 10px;
	text-align: center;
    object-fit: scale-down;

	&.mobile {
		width: 180px;
	}
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

function Projects(props) {
    return (
        <Main>
            <br></br>
            <h1> Project 4 </h1>
            <Project4 src={Img} alt='Project 4' />
    
            <p>Word Vomit is a one liner blog to document events most worthy of remembrance.  Here you are encouraged to write out your thoughts, of the day in only a line or so without the pressure of filling out an entire page.</p>
            <a rel='noopener noreferrer' href='https://wvblog.herokuapp.com/' target='blank'>
            <ButtonC>WV Blog Site</ButtonC>    
            </a>
            <a rel='noopener noreferrer' href='https://github.com/5usana/wvblog' target='blank'>
            <ButtonP4>Repository</ButtonP4>
            </a>

            <h1> Project 3</h1>
            <Project3 src={Img2} alt='Project 3' />
            <p>The BOAT Dashboard app was built mimicking a team-client collaborative interaction, leveraging the MERN full-stack for a dashboard application integrating functionality from a custom-made API.</p>
            <a rel='noopener noreferrer' href='https://boat-dashboard.herokuapp.com/' target='blank'>
            <ButtonB>BOAT Site</ButtonB>    
            </a>
            <a rel='noopener noreferrer' href='https://github.com/big-brainers/boat-frontend' target='blank'>
            <ButtonP3>Repository</ButtonP3>
            </a>

            <h1> Project 2 </h1>
            <img src={Img3} alt='Project 2' />
            <p>Unsolicited Advice from friends or strangers can get tiresome so why not let my app decide for you? Don't like the advice you get? That's ok, give it another go and find the adice you came for!</p>
            <a rel='noopener noreferrer' href='https://unsolicited-advice.herokuapp.com/'  target='blank'>
            <ButtonA>Unsolicited Advice Site</ButtonA> 
            </a>
            <a rel='noopener noreferrer' href='https://github.com/5usana/Unsolicited-Advice'  target='blank'>
            <ButtonP2>Repository</ButtonP2>
            </a>

            <h1> Project 1 </h1>
            <img src={Img4} alt='Project 1' />
            <p>If you are a fan of the iconic series Twin Peaks then this 10 question quiz is for you! This is a Self-Scoring Trivia game for my Unit 1 Project!</p>
            <a rel='noopener noreferrer' href='https://wvblog.herokuapp.com/' target='blank'>
            <ButtonC>Twin Peaks Trivia Site</ButtonC>    
            </a>
            <a rel='noopener noreferrer' href='https://github.com/big-brainers/boat-frontend' target='blank'>
            <ButtonP1>Repository</ButtonP1>
            </a>

            
            
        </Main>
    );
}

export default Projects;