import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from 'styled-components'
import HomeButton from "../subComponents/HomeButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { Mail, MoonSpin, Logoo, SpinThick, YinYang } from "./AllSvgs";
import Intro from "./Intro";


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100%;
height: 100vh;
overflow: hidden;

position: relative;

h3,h3,h4,h5,h6{
    font-family: 'Karla', sans-serif ;
    font-weight: 500;
}
`


const Container = styled.div`
padding: 2rem;

`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 3rem;
padding: .1rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
border-radius: .5rem;
transition: .2s;

&:hover{
    background-color: white;
    transform: scale(1.2);
    box-shadow: 0 0 5px 3px burlywood;
}

`

const Projects = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 42%;
left: calc(1.5vw);
transform: rotate(-90deg) translate(-50%, 0);
text-decoration: none;
background-color: burlywood;
padding: .5rem;
border-radius: .5rem;
z-index: 1;
transition: .2s;

&:hover{
    background-color: ${props => props.click ? 'burlywood' : 'white'};
    transform: scale(1.2);
    box-shadow: 0 0 5px 3px white;
}

`
const Skills = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
background-color: burlywood;
padding: .5rem;
border-radius: .5rem;
z-index: 1;
transition: .2s;

&:hover{
    background-color: white;
    transform: scale(1.2);
    box-shadow: 0 0 8px 6px burlywood;
}

`

const BottomBar = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    width: 100%;

    display: flex;
    justify-content: space-evenly;

`

const About = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
background-color: burlywood;
padding: .5rem;
border-radius: .5rem;
z-index: 1;
transition: .2s;

&:hover{
    background-color: ${props => props.click ? 'burlywood' : 'white'};
    transform: scale(1.2);
    box-shadow: 0 0 5px 3px white;
}
`

const Resume = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
background-color: burlywood;
padding: .5rem;
border-radius: .5rem;
z-index: 1;
transition: .2s;

&:hover{
    background-color: white;
    transform: scale(1.2);
    box-shadow: 0 0 8px 6px burlywood;
}
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}

`


const Center = styled.div`
    position: absolute;
    top: ${props => props.click ? '85%' : '50%'};
    left: ${props => props.click ? '92%' : '50%'};
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;

    &>:first-child{
        animation: ${rotate} infinite 1.5s linear;
    }

    &>:last-child{
        display: ${props => props.click ? 'none' : 'inline-block'};
        padding-top: 1rem;
    }

`

const DarkDiv = styled.div`
position: absolute;
top: 0;
bottom: 0;
background-color: #000; 
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;

`





const Main = () => {

    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <MainContainer>
            
            <DarkDiv click={click} />
            <Container>
                <HomeButton />
                <LogoComponent theme={click ? 'dark' : 'light'} />
                <SocialIcons theme={click ? 'dark' : 'light'} />
                
                <Center click={click}>
                    <YinYang onClick={()=> handleClick()} width={click ? '80' : '200'} height={click ? '80' : '200'} fill='currentColor' />
                    <span>Click Me</span>
                </Center>

                <Contact target="_blank" to={{pathname: "mailto:coderboy.exe@gmail.com"}}>
                    <Mail width={30} height={30} fill='currentColor' />
                </Contact>

                <Skills to='/skills'>
                    <h3>
                        Skills
                    </h3>
                </Skills>

                <Projects to='/projects' click={click}>
                    <h3>
                        Projects
                    </h3>
                </Projects>

                <BottomBar>
                    <About to='/about' click={click}>
                        <h3>
                            About
                        </h3>
                    </About>
                    <Resume to='/skills'>
                        <h3>
                            Resume
                        </h3>
                    </Resume>
                </BottomBar>


            </Container>
            {click ? <Intro click={click} /> : null}

        </MainContainer>
    )
}

export default Main