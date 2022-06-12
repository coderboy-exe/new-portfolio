import React from "react";
import styled, {ThemeProvider} from 'styled-components';

import {lightTheme} from './Themes';
import {Blockchain, CssLogo, Develope, DjangoLogo, FigmaLogo, GitLogo, HtmlLogo, JsLogo, ReactLogo, SCLogo, SolidityLogo, TailwindLogo, VsCodeLogo, VueLogo} from './AllSvgs';


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;

`

const Main = styled.div`
border: .2rem solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 2;
line-height: 1.5;

font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + .7vw);

`

const Description = styled.div`
color: ${props=> props.theme.text};
font-size: calc(0.6em + .7vw);
padding: 0.5rem 0;

`

const TechStack = styled.div`
display: flex;
padding: 1rem;
justify-content: space-between;
align-items: center;

`



const Skills = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <Main>
                    <Title>
                        <Blockchain width={50} height={50} />
                        Blockchain/Web3 Developer
                    </Title>
                    <Description>
                    I love to build DApps using my favourite tool, Moralis.io.
                    </Description>
                    <Description>
                        <ul>
                            <li>
                                <ReactLogo width={30} height={30} />
                            </li>
                            <li>
                                <SolidityLogo width={30} height={30} />
                            </li>
                            <li>
                                <SCLogo width={30} height={30} />
                            </li>
                            <li>
                                <TailwindLogo width={30} height={30} />
                            </li>
                            <li>
                                <DjangoLogo width={30} height={30} />
                            </li>
                            <li>
                                <GitLogo width={30} height={30} />
                            </li>
                        </ul>
                    </Description>
                </Main>

                <Main>
                <Title>
                    <Develope width={40} height={40} />
                        Front-End Developer
                    </Title>
                    <Description>
                        I enjoy using my understnding of core programming principles to build fast, scalable web2.0 applications and bring general ideas to life.
                    </Description>
                    <Description>
                        <TechStack>
                            <ReactLogo width={40} height={40} />
                            <FigmaLogo width={40} height={40} />
                            <CssLogo width={40} height={40} />
                            <HtmlLogo width={40} height={40} />
                            <JsLogo width={40} height={40} />

                        </TechStack>
                        <TechStack>
                            <VueLogo width={40} height={40} />
                            <VsCodeLogo width={40} height={40} />
                            <TailwindLogo width={40} height={40} />
                            <SCLogo width={40} height={40} />
                            <GitLogo width={40} height={40} />
                        </TechStack>
                    </Description>
                </Main>
            </Box>            
        </ThemeProvider>

    )
}

export default Skills