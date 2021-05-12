import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import styled from 'styled-components';

const MainDiv = styled.div`
    display: flex;
	flex-direction: row;
	flex-flow: row;	
	text-align: center;
`;

const Greeting = styled.p`
    display: flex;
	flex-direction: row;
	background-color: #F28482;
    opacity: 0.5;
    flex-flow: row;	
	width: 30vw;
	text-align: center;
    display: inline-block;

    
`;

function Home(props) {
    return (
        <>
            <NavBar />
            <MainDiv>
                <Greeting> Heyyy, I’m Susana (she/her) 🤙🏽
                You’ll find me to be highly upbeat and creative, I am obsessed with hoarding plants 🌱 my two cats 🐱(Giga + Mushi)🐯  and seeking out adventure. My background consists of +10 years experience with front facing customer service. 
                This new year brings change and excitement into my life, I have transitioned into the exciting world of development, and I am eager to show off  my new skills as a Software Developer! My experience involves Full-stack development although I have been leaning more heavily towards front-end development.  Currently pushing my creative drive developing skill sets needed to thrive in an environment where technical innovation is vital for business success. 
                </Greeting>
            </MainDiv>
            <Footer />
        </>
    );
}

export default Home;