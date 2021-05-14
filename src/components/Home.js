import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import styled from 'styled-components';

const MainDiv = styled.div`
    // display: flex;
	// flex-direction: row;
	// flex-flow: row;	
    border-radius: 20px;
    width: 75vw;
	margin: 0 auto;
	margin-bottom: 10px;
	text-align: center;
    object-fit: scale-down;

	// &.mobile {
	// 	width: 180px;
	// }
`;

const Greeting = styled.p`
    display: flex;
	flex-direction: row;
	background-color: #F7EDE2;
    opacity: 0.5;
    flex-flow: row;	
	width: 65vw;
	text-align: center;
    display: inline-block;

    
`;

function Home(props) {
    return (
        <>
            <NavBar />
            <MainDiv>
                <Greeting> Heyyy, I’m Susana (she/her) 🤙🏽
                You’ll find me to be highly upbeat and creative, I am obsessed with hoarding plants 🌱 my two cats 🐱(Giga + Mushi)🐯  and seeking out adventure. 
                <br></br>
                <br></br>
                My background consists of +10 years experience with front facing customer service. 
                This new year brings change and excitement into my life, I have transitioned into the exciting world of development, and I am eager to show off  my new skills as a Software Developer! 
                <br></br>
                <br></br>
                My experience involves Full-stack development although I have been leaning more heavily towards front-end development.  Currently pushing my creative drive developing skill sets needed to thrive in an environment where technical innovation is vital for business success. 
                <h2> Languages and Tools: </h2>
                <img alt="Javascript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />

                <img alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />

                <img alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />

                <img alt="Django" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/django/django.png" />

                <img alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />

                <img alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />

                <img alt="SQL" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png" />

                <img alt="PostgreSQL" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png" />

                <img alt="MySQL" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png" />

                <img alt="MongoDB" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png" />

                <img alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />

                <img alt="nodejs" width="26px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" />


                <img alt="Python" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png" />
                <br></br>
                <br></br>
                Get in touch: susana.debugs@gmail.com
                </Greeting>
            </MainDiv>
            <Footer />
        </>
    );
}

export default Home;