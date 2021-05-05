import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeNav = styled.nav`
	margin: 0 auto;
	padding: 16px 24px;
	height: 200px;
	font-size: 3rem;

`;

const NavContainer = styled.section`
	display: flex;
	flex-direction: row;
	order: 1;
	background-color: #CCE4E5;
	flex-flow: row;	
`;

const HeaderOne = styled.h1`
	padding: 70px 0 0 0;
	font-weight: 100;
	font-size: 61px;
	margin-left: 10px;
	color: black;
	text-decoration: none;
`;

const AboutButton = styled.button`
	display:inline-block;
	padding:0.35em .4em;
 	border:0.29em solid #FFFFFF;
 	order-radius:0.12em;
 	transition: all 0.2s;
`;

function NavBar() {

    return (
		<NavContainer>
			<Link style={{ textDecoration: 'none' }} to='/'>
				<HeaderOne> 
					HOME 
					</HeaderOne>
			</Link>
				
				<a href="https://twitter.com/Susana_debugs" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg" alt="Susana_debugs" height="30" width="40" /></a>
				<a href="https://www.linkedin.com/in/susanacmartins/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="susanacmartins" height="30" width="40" /></a>
 				<a href="https://www.instagram.com/susanacodes/?hl=en" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="susanawashere" height="30" width="40" /></a>

				
			<HomeNav>
				<Link to='/about'>
					<AboutButton>
						About
					</AboutButton>
				</Link>
			</HomeNav>
		</NavContainer>
    );
}

export default NavBar;