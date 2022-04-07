import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RoutedLink } from 'react-router-dom'


function Sidebar() {
    return (
        <SideBarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='/'>Home</SideBarLink>
                    <SideBarLink to='/courses'>Courses</SideBarLink>
                    <SideBarLink to='/blog'>Blog</SideBarLink>
                    <SideBarLink to='/road-map'>Road Map</SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to='/sign-up'>Sign in</SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

const SideBarContainer = styled.div`
    position: fixed;
    background-color: #000;
    color: #fff;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease;
    opacity: 100%;
    z-index: 99;
`

const SideBarWrapper = styled.div``

const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width:480px){
        grid-template-rows: repeat(6, 90px)
    }
`

const SideBarLink = styled(ScrollLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    list-style: none;
    transition: 0.2 ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #fab209
    }
`

const SideBarRoute = styled(RoutedLink)`
    border-radius: 50px;
    background-color: #fab209;
    padding: 16px 64px;
    white-space: nowrap;
    color: #010606;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        background-color: #fff;
    }
`


const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

const CloseIcon = styled(FaTimes)`
    color: #fff;
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background: transparent
`

export default Sidebar