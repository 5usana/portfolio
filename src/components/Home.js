import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import styled from 'styled-components';
import Projects from './Projects';

const MainDiv = styled.div`
    border-radius: 20px;
    width: 350px;
	margin: 0 auto;
	margin-bottom: 10px;
	text-align: center;

	&.mobile {
		width: 180px;
	}
`;

function Home(props) {
    return (
        <>
            <NavBar />
            <MainDiv>
                <p>Building my portfolio!</p>
                <Projects />
            </MainDiv>
            <Footer />
        </>
    );
}

export default Home;