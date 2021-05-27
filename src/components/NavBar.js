import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import susana from '../images/avatar-susana.png';

const NavContainer = styled.section`
	display: flex;
	background-color: #fff;
	flex-flow: row;	
	width: 100vw;
	text-align: center;
    left: 0;
    top: 0;
    right: 0;
	position: fixed;
`;

const Twitter = styled.a`
	background-color: #fff;
	margin: 20px 0 0 0;
`;

const LinkedIn = styled.a`
	background-color: #fff;
	margin: 20px 0 0 0;
`;
const Instagram = styled.a`
	background-color: #fff;
	margin: 20px 0 0 0;
`;

const GitHub = styled.a`
	background-color:#fff;
	margin: 20px 0 0 0;
`;

const HeaderOne = styled.h1`
	margin: 5px 40px 15px 35px;
	color: black;
	font-size: 2.5em;
	background-color: #fff;
	text-alight: center;
`;

const HeaderTwo = styled.h2`
	color: black;
	font-size: 1.2em;
	padding: 1px;
	margin: 0px 0px 5px 30px;
	position absolute;
	right: 0;
`;


function NavBar() {

    return (
		<NavContainer>
			<Twitter href="https://twitter.com/Susana_debugs" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg" alt="Susana_debugs" height="30" width="40" style={{ color: '#23777d' }}/></Twitter>

			<LinkedIn href="https://www.linkedin.com/in/susanacmartins/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="susanacmartins" height="30" width="40" /></LinkedIn>

 			<Instagram href="https://www.instagram.com/susanacodes/?hl=en" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="susanacodes" height="30" width="40" /></Instagram>	

			 <GitHub href="https://github.com/5usana" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="5usana" height="30" width="40" /></GitHub>	

			 
		

			<Link style={{ textDecoration: 'none' }} to='/'>
				<HeaderOne> 
					Susana Martins
				</HeaderOne>
			</Link>
			{/* <Link style={{ textDecoration: 'none' }}  to='/about'>
				<HeaderTwo>
					About Me	
				</HeaderTwo>
			</Link> */}
			{/* <Link to='/projects'>
				<HeaderTwo>
					Projects	
				</HeaderTwo>
			</Link>
			 */}
		</NavContainer>
    );
}

export default NavBar;