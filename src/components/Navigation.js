import React from 'react';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components';

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1.5em;
`;

const LinkContainer = styled.div`
    width: 40%;
    display: flex;
    text-align: center;

    @media screen and (min-width: 768px) and (max-width: 991px){
        width: 50%;
    }
`;

const StyledLink = styled(NavLink)`
    font-size: 1.05em;    
    font-weight: 700;
    margin: auto 0.5em;
    color: #e70f1a;
    text-decoration: none;

    &:hover{
        cursor:pointer;
        color: #ffffff;
    }
`;

function Navigation() {
    return (
        <Navbar>
            <h1>MovieList</h1>
            <LinkContainer>
                <StyledLink to="/trending">Latest Movies</StyledLink>
                <StyledLink to="/upcoming">Upcoming Movies</StyledLink>
                <StyledLink to="/search">Search</StyledLink>
            </LinkContainer>
        </Navbar>
    )
}

export default Navigation
