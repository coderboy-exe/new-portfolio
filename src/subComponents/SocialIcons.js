import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {darkTheme} from '../components/Themes';
import {Facebook, Github, Instagram, Twitter, YouTube } from '../components/AllSvgs';


const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 3rem;
transition: 2s ease;

z-index: 3;

&>*:not(:last-child) {
    margin: 0.5rem 0;
}


`

const Line = styled.span`
width: .2rem;
height: 3rem;
background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
transition: 2s ease;
`


const SocialIcons = (props) => {
    return (
        <Icons>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://github.com/coderboy-exe"}}>
                    <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: 'inherit'}}target="_blank" to={{pathname:"https://twitter.com/coderboy_exe"}}>
                    <Twitter width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://facebook.com/uchesam.ottah"}}>
                    <Facebook width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://instagram.com/the.uchechukwu?utm_medium=copy_link"}}>
                    <Instagram width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body} />
                </NavLink>
            </div>

            <Line color={props.theme} />
        </Icons>
    )
}

export default SocialIcons