import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import styled from 'styled-components';
import Projects from './Projects';

const MainDiv = styled.div`
    display: flex;
	flex-direction: row;
	background-color: yellow;
	flex-flow: row;	
	text-align: center;
`;

function Home(props) {
    return (
        <>
            <NavBar />
            <MainDiv>
                <h1>Building my portfolio!</h1>
                <Projects />
            </MainDiv>
            <Footer />
        </>
    );
}

export default Home;