import React, { useEffect, useState } from "react";
import styled from 'styled-components';

import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import HomeButton from "../subComponents/HomeButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import {Work} from '../data/ProjectData';
import ProjectComponent from "./ProjectComponent";
import AnchorComponent from "../subComponents/AnchorComponent";


const MainContainer = styled.div`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;

`
const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
width: 100%;
height: 100vh;
position: relative;
padding-bottom: 5rem;
height: auto;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`




const Projects = () => {

    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70) / 30;
        setNumbers(parseInt(num));
    }, [])
 

    return (
        <MainContainer>
            <Container>
                <LogoComponent />
                <HomeButton />
                <SocialIcons />
                <AnchorComponent numbers={numbers} />

                <Center>
                    <Grid>
                        {
                            Work.map(project => {
                               return <ProjectComponent key={project.id} project={project}  />
                            })
                        }
                    </Grid>
                </Center>

            </Container>
        </MainContainer>
    )
}

export default Projects