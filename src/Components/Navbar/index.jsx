import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link as RoutedLink } from 'react-router-dom'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'

const Navbar = ({ toggle }) => {
  const [scrolled, setScrolled] = useState(false)

  const navIsScrolled = () => {
    window.scrollY >= 80 ? setScrolled(true) : setScrolled(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', navIsScrolled)
  })

  const navigateTop = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <Nav scrolled={scrolled}>
        <NavBarContainer>
          <NavLogo onClick={navigateTop} to="/">MegaJS</NavLogo>
          <MobileIcon onClick={toggle}><FaBars /></MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks onClick={navigateTop} to='/'>Home</NavLinks>
            </NavItem>  
            <NavItem>
              <NavLinks to='about' duration={500} smooth={true} spy={true} offset={-80}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='courses' duration={500} smooth={true} spy={true} offset={-80}>Courses</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='blog' duration={500} smooth={true} spy={true} offset={-80}>Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='road-map' duration={500} smooth={true} spy={true} offset={-80}>Road-map</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  )
}

const Nav = styled.div`
  background-color: ${({ scrolled }) => scrolled ? '#010606' : 'transparent'};
  margin-top: -80px;
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
  cursor: pointer;

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