import React from 'react'
import { Button } from '../Button'
import styled from 'styled-components'

const InfoSection = ({
    id,
    lightBg,
    imgStart,
    topLine,
    heading,
    description,
    buttonLabel,
    img,
    alt,
    darkText,
    primaryText
}) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <ColumnText>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightBg={lightBg}>{heading}</Heading>
                            <SubTitle lightBg={lightBg}>{description}</SubTitle>
                            <ButtonWrapper>
                                <Button to='home' primary={primaryText} dark={darkText}>{buttonLabel}</Button>
                            </ButtonWrapper>
                        </TextWrapper>
                    </ColumnText>
                    <ColumnImage>
                        <ImageWrapper>
                            <Image src={img} alt={alt}></Image>
                        </ImageWrapper>
                    </ColumnImage>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => lightBg ? '#f9f9f9' : '#010606'};

    @media screen and (max-width: 768px) {
        padding:100px 0;
    }
`

const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    justify-content: center;
`

const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    /* note you need to put two levels of quotes */
    grid-template-areas: ${({ imgFirst }) => imgFirst ? '"img text"' : '"text img"'};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgFirst }) => imgFirst ? '"img" "text"' : '"text" "img"'};
    }
`

const ColumnText = styled.div`
    grid-area: text;
`

const ColumnImage = styled.div`
    grid-area: img;
`

const TextWrapper = styled.div`
    max-width: 540px;
    padding: 0 0 60px;
`

const TopLine = styled.div`
    color: #fab209;
    font-size:16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

const Heading = styled.h2`
    margin-bottom: 24px;
    font-size: 48px;
    color: ${({ lightBg }) => lightBg ? '#010606' : '#f7f8fa'};
    line-height: 1.1;
    font-weight: 700;

    @media screen and (max-width: 768px){
        font-size:32px;        
    }
`

const SubTitle = styled.div`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    color: ${({ lightBg }) => lightBg ? '#010606' : '#f7f8fa'};
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`

const ImageWrapper = styled.div`
    max-width: 555px;
    height: 100%;
`

const Image = styled.img`
    width: 100%;
    margin-bottom: 10px;
    padding: 0;
`


export default InfoSection