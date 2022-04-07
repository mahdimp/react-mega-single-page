import React from 'react'
import styled from 'styled-components'
import { Link as RoutedLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">MegaJS</NavLogo>
          <MobileIcon><FaBars /></MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='/'>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/courses'>Courses</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/blog'>Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/road-map'>Road-map</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/sign-up'>Sign up</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  )
}

const Nav = styled.div`
  background-color: #000;
  color: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.rem;
  position: sticky;
  top: 0px;
  z-index: 10;
`

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

const NavLogo = styled(RoutedLink)`
  cursor: pointer;
  color: #fff;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  display: flex;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.7rem;
    cursor: pointer;
  }
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled.li`
  height: 80px;
`

const NavLinks = styled(ScrollLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding : 0 1rem;
  height: 100% ;

  &.active{
    border-bottom: 3px solid #fab209;
  }
`

const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtnLink = styled(RoutedLink)`
  border-radius: 50px;
  background: #fab209;
  text-decoration: none;
  color: #010606;
  white-space: nowrap;
  padding: 10px 22px; 
  font-size:  16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover{
    background-color: #fff;
    color: #010606;
  }
`

export default Navbar