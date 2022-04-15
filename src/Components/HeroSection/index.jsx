import React, { useState } from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'
import { Button } from '../Button'


const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src="videos/video.mp4" type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Javascript is the king</HeroH1>
                <HeroP>Learn JS and Frameworks</HeroP>
                <HeroButtonWrapper>
                    <Button $primary to="/" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroButtonWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom:0;
        z-index: 2;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%);
    }
`

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
`

const VideoBg = styled.video`
    object-fit: cover;
    -o-object-fit: cover;
    width: 100%;
    height: 100%;
`

const HeroContent = styled.div`
    z-index: 3;
    padding: 8px 24px;
    position: absolute;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;

    @media screen and (max-width:768px){
        font-size: 40px;
    }

    @media screen and (max-width:480px){
        font-size: 32px;
    }
`

const HeroP = styled.p`
    color: #fff;
    font-size: 24px;
    margin-top: 32px;
    max-width: 600px;

    @media screen and (max-width:768px){
        font-size: 20px;
    }

    @media screen and (max-width:480px){
        font-size: 18px;
    }
`

const HeroButtonWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
`

export default HeroSection