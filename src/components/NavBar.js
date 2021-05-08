import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import susana from '../images/avatar-susana.png';

const NavContainer = styled.section`
	display: flex;
	flex-direction: row;
	background-color: #b56a14;
	flex-flow: row;	
`;

const HeaderOne = styled.h1`
	margin-left: 10px;
	color: black;
	text-decoration: none;
`;

const StyledLink = styled.a`
  color: red;
  background-color: red;
  	
  
`;

function NavBar() {

    return (
		<NavContainer>
			<Link style={{ textDecoration: 'none' }} to='/'>
				<HeaderOne> 
					<img src={susana} alt='susana avatar' />
				</HeaderOne>
			</Link>
			<StyledLink href="https://twitter.com/Susana_debugs" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg" alt="Susana_debugs" height="30" width="40" style={{ color: '#23777d' }}/></StyledLink>
			<a href="https://www.linkedin.com/in/susanacmartins/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="susanacmartins" height="30" width="40" /></a>
 			<a href="https://www.instagram.com/susanacodes/?hl=en" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="susanawashere" height="30" width="40" /></a>	
		
			<Link style={{ textDecoration: 'none' }}  to='/about'>
				About Me	
			</Link>
			
		</NavContainer>
    );
}

export default NavBar;