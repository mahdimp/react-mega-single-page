import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer = () => {
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

export default Footer