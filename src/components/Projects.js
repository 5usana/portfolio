import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    border-radius: 20px;
    width: 450px;
	margin: 0 auto;
	margin-bottom: 10px;
	text-align: center;

	&.mobile {
		width: 180px;
	}
`;

function Projects(props) {
    return (
        <Main>
            <h2> Project 4 </h2>
            <p>Word Vomit is a one liner blog to document events most worthy of remembrance.  Here you are encouraged to write out your thoughts, of the day in only a line or so without the pressure of filling out an entire page.</p>
            <a href='https://wvblog.herokuapp.com/' target='blank'>WV Blog </a>

            <h2> Project 2 </h2>
            <p>Unsolicited Advice from friends or strangers can get tiresome so why not let my app decide for you? Don't like the advice you get? That's ok, give it another go and find the adice you came for!</p>
            <a href='https://unsolicited-advice.herokuapp.com/' target='blank'>Unsolicited Advice </a>

            
        </Main>
    );
}

export default Projects;