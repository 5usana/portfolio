import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
	display: flex;
	flex-flow: row;	
	// position: fixed;
	display: block;
	bottom: 0;
	height: 20px;
	width: 100vw;
	text-align: center;

	.footer-text {
		display: inline-block;
		color: #000000;
		font-weight: 500;
		text-decoration: none;
		padding: 0 0 8px 0;
	}
`;

function Footer() {
	let currentyear = new Date().getFullYear();
	return (
		<FooterStyle>
			<hr />
			<p className='footer-text'>{currentyear} Copyright ⓒ </p>
			<a rel='noopener noreferrer' href='https://github.com/5usana' target='blank'>
            5usana
            </a>
		</FooterStyle>
	);
}

export default Footer;