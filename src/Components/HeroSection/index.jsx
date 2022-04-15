import React from 'react'
import styled from 'styled-components'


const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src="videos/video.mp4" type="video/mp4" />
            </HeroBg>
        </HeroContainer>
    )
}

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
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
    z-index: 100;
`

const VideoBg = styled.video`
    object-fit: cover;
    -o-object-fit: cover;
    width: 100%;
    height: 100%;
`


export default HeroSection