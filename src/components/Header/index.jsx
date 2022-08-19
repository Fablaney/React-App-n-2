import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DarkLogo from "../../assets/dark-logo.png"

const NavContainer = styled.nav
    `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
    `
const HomeLogo = styled.img
    `
        height: 70px;
    `

function Header()
{
    return (
        <NavContainer>

            <Link to="/">
                <HomeLogo src={DarkLogo}></HomeLogo>
            </Link>

            <div>

                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>Fare le test</StyledLink>

            </div>

        </NavContainer>  
    )
}

export default Header