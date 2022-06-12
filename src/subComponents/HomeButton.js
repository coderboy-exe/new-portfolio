import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

import { HomeBtn } from "../components/AllSvgs";

const Home = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;

display: flex;
justify-content: center;
align-items: center;
z-index: 3;
transition: .2s;


cursor: pointer;

&:hover{
    background-color: white;
    transform: scale(1.2) translate(-40%, 0);
    box-shadow: 0 0 8px 6px yellow;
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}


`

const HomeButton = () => {
    return (
        <Home>
            <NavLink to="/">
                <HomeBtn width={30} height={30} fill='currentColor' />
            </NavLink>
        </Home>
    )
}

export default HomeButton