import React from 'react'
import styled from 'styled-components'
import { animateScroll as scroll } from 'react-scroll'
import { Link } from 'react-router-dom'
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    const navigateTop = () => {
        scroll.scrollToTop()
    }
    return (
        <Container>
            <Wrapper>
                <LinksContainer>
                    <LinksWrapper>
                        <LinksItem>
                            <LinksTitle>About us</LinksTitle>
                            <FooterLink to='home'>home</FooterLink>
                            <FooterLink to='courses'>courses</FooterLink>
                            <FooterLink to='blog'>blog</FooterLink>
                            <FooterLink to='roadmap'>roadmap</FooterLink>
                        </LinksItem>
                        <LinksItem>
                            <LinksTitle>About us</LinksTitle>
                            <FooterLink to='home'>home</FooterLink>
                            <FooterLink to='courses'>courses</FooterLink>
                            <FooterLink to='blog'>blog</FooterLink>
                            <FooterLink to='roadmap'>roadmap</FooterLink>
                        </LinksItem>
                    </LinksWrapper>
                    <LinksWrapper>
                        <LinksItem>
                            <LinksTitle>About us</LinksTitle>
                            <FooterLink to='home'>home</FooterLink>
                            <FooterLink to='courses'>courses</FooterLink>
                            <FooterLink to='blog'>blog</FooterLink>
                            <FooterLink to='roadmap'>roadmap</FooterLink>
                        </LinksItem>
                        <LinksItem>
                            <LinksTitle>About us</LinksTitle>
                            <FooterLink to='home'>home</FooterLink>
                            <FooterLink to='courses'>courses</FooterLink>
                            <FooterLink to='blog'>blog</FooterLink>
                            <FooterLink to='roadmap'>roadmap</FooterLink>
                        </LinksItem>
                    </LinksWrapper>
                </LinksContainer>
                <SocialMediaContainer>
                    <SocialMediaWrapper>
                        <SiteTitle to={'/'} onClick={navigateTop}>Megajs</SiteTitle>
                        <SiteCopyRight>Megajs copy rights 2022</SiteCopyRight>
                        <Icons>
                            <IconLink>
                                <FaFacebook />
                            </IconLink>
                            <IconLink>
                                <FaYoutube />
                            </IconLink>
                            <IconLink>
                                <FaInstagram />
                            </IconLink>
                            <IconLink>
                                <FaTwitter />
                            </IconLink>
                        </Icons>
                    </SocialMediaWrapper>
                </SocialMediaContainer>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    background-color:#101522;
    color:#fafafa;
`

const Wrapper = styled.div`
    padding: 48px 24px;
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`

const LinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and(max-width: 820px){
        padding-top: 32px
    }
`

const LinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

const LinksItem = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;
    align-items: flex-start;
    margin:19px;

    @media screen and (max-width:420px) {
        padding: 10px;
        width: 100%;
        margin: 0;
    }

`

const LinksTitle = styled.h3`
    font-size: 14px;
    margin-bottom: 16px;
`

const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover{
        color: #fab209;
    }
`

const SocialMediaContainer = styled.div`
    max-width: 100%;
    width: 1024px;
`

const SocialMediaWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    max-width:1000;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

const SiteTitle = styled(Link)`
    color:#fff;
    display: flex;
    cursor: pointer;
    font-size:1.2rem;
    align-items:center;
    font-weight:bold;
    margin-bottom: 16px;
    text-decoration: none;

`

const SiteCopyRight = styled.div`
    color: #fff;
    margin-bottom: 16px;
`

const Icons = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

const IconLink = styled.div`
    color: #fff;
    font-size:24px;
`


export default Footer