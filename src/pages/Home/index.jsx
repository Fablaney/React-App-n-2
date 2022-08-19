import '../../styles/style.css'
import styled from 'styled-components'
import { useState } from 'react'

const HomeContainer = styled.div`
    widht: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    `

function Home()
{
    return (
        <HomeContainer>
            <h1>Page Accueil</h1>
        </HomeContainer>
    )
}

export default Home