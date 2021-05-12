import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    border-radius: 20px;
    width: 650px;
	margin: 0 auto;
	margin-bottom: 10px;
	text-align: center;

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



function Projects(props) {
    return (
        <Main>
            <br></br>
            <h2> Project 4 </h2>
            <p>Word Vomit is a one liner blog to document events most worthy of remembrance.  Here you are encouraged to write out your thoughts, of the day in only a line or so without the pressure of filling out an entire page.</p>
            <a href='https://wvblog.herokuapp.com/' target='blank'>
            <ButtonC>WV Blog Site</ButtonC>    
            </a>
            <a href='https://wvblog.herokuapp.com/'>
            <ButtonP4>Repository</ButtonP4>
            </a>

            <h2> Project 3</h2>
            <p>The BOAT Dashboard app was built mimicking a team-client collaborative interaction, leveraging the MERN full-stack for a dashboard application integrating functionality from a custom-made API.</p>
            <a href='https://boat-dashboard.herokuapp.com/'>
            <ButtonB>BOAT Site</ButtonB>    
            </a>
            <a href='https://github.com/big-brainers/boat-frontend'>
            <ButtonP3>Repository</ButtonP3>
            </a>

            <h2> Project 2 </h2>
            <p>Unsolicited Advice from friends or strangers can get tiresome so why not let my app decide for you? Don't like the advice you get? That's ok, give it another go and find the adice you came for!</p>
            <a href='https://unsolicited-advice.herokuapp.com/'>
            <ButtonA>Unsolicited Advice Site</ButtonA> 
            </a>
            <a href='https://github.com/5usana/Unsolicited-Advice'>
            <ButtonP2>Repository</ButtonP2>
            </a>

            <h2> Project 1 </h2>
            <p>If you are a fan of the iconic series Twin Peaks then this 10 question quiz is for you! This is a Self-Scoring Trivia game for my Unit 1 Project!</p>
            <a href='https://wvblog.herokuapp.com/' target='blank'>
            <ButtonC>Twin Peaks Trivia Site</ButtonC>    
            </a>
            <a href='https://github.com/big-brainers/boat-frontend'>
            <ButtonP1>Repository</ButtonP1>
            </a>

            
            
        </Main>
    );
}

export default Projects;