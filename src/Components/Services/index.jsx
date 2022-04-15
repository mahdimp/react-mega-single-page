import React from 'react'
import styled from 'styled-components'
import about from '../../Images/about.svg'
import courses from '../../Images/courses.svg'
import blog from '../../Images/blog.svg'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesTitle>Courses Contents</ServicesTitle>
            <ServicesContent>
                <ServiceItem>
                    <ServiceImage src={about}></ServiceImage>
                    <ServiceTitle>Project oriented</ServiceTitle>
                    <ServiceDescription>
                        Lorem ipsum dolor sit amet.
                    </ServiceDescription>
                </ServiceItem>
                <ServiceItem>
                    <ServiceImage src={courses}></ServiceImage>
                    <ServiceTitle>Versatile courses</ServiceTitle>
                    <ServiceDescription>
                        Lorem ipsum dolor sit amet.
                    </ServiceDescription>
                </ServiceItem>
                <ServiceItem>
                    <ServiceImage src={blog}></ServiceImage>
                    <ServiceTitle>Updated news</ServiceTitle>
                    <ServiceDescription>
                        Lorem ipsum dolor sit amet.
                    </ServiceDescription>
                </ServiceItem>
            </ServicesContent>
        </ServicesContainer>
    )
}

const ServicesContainer = styled.div`
    height: 800px;
    background-color: #010606;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

const ServicesContent = styled.div`
    max-width:1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 0 50px;
    }
`

const ServicesTitle = styled.h2`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 20px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

const ServiceItem = styled.div`
    background: #fff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.3);
    transition: all .3s;

    &:hover{
        transform: scale(1.04);
        cursor: pointer;
    }
`

const ServiceTitle = styled.h3`
    font-size: 1rem;
    margin-bottom: 10px;
`

const ServiceDescription = styled.p`
    font-size: 0.8rem;
    text-align: center;
`

const ServiceImage = styled.img`
    height: 150px;
    width: 150px;
    margin-bottom: 10px;
`

export default Services