import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Spaceman from '../assets/Images/spaceman.png'



const Box = styled(NavLink)`
width: calc(10rem + 15vw);
text-decoration: none;
height: 20rem;
padding: 1rem;
color: ${props => props.theme.text};
border: .2rem solid ${props => props.theme.text};
backdrop-filter: blur(.2rem);
box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
cursor: pointer;
border-radius: 2rem;

display: flex;
flex-direction: column;
z-index: 1;

&:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition: all 0.5s ease;
}
`

const Image = styled.div`
background-image: ${`url(${Spaceman})`};
width: 100%;
height: 60%;
background-size: cover;
border: .1rem solid transparent;
background-position: center center; 

${Box}:hover & {
    border: 0.1rem solid ${props => props.theme.body};
}
`
const Title = styled.h3`
color: inherit;
padding: 0.5rem 0;
padding-top: 1rem;
font-family: 'Karla', sans-serif;
font-weight: 700;
border-bottom: .1rem solid ${props => props.theme.text};

${Box}:hover & {
    border-bottom: 0.1rem solid ${props => props.theme.body};
}
`

const Hashtags = styled.div`
padding: 0.5rem 0;
`

const Tag = styled.span`
padding-right: 0.5rem;
`

const Description = styled.span`
padding: 0.5rem 0;
`




const ProjectComponent = (props) => {

    const { name, description, tags, demo, github } = props.project;

    return (
        <Box target="_blank" to={{pathname: demo}}>
            <Image />
            <Title>{name}</Title>
            <Hashtags>
                {
                    tags.map((t,id) => {
                        return <Tag key={id}> #{t} </Tag>
                    })
                }
            </Hashtags>
            <Description>
                {description}
            </Description>
        </Box>
    )
}

export default ProjectComponent