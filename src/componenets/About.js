import React, { useState } from 'react'
import {AboutContainer,AboutImage,AboutHeading} from "../styled-components/AboutStyles"
import {Container,Image,Message} from "../styled-components/SharedStyled";
import {Row,Col} from "../styled-components/GridStyles"
const About = () => {
    const [state]= useState({
        heading:"I\'m Nikunj Gupta, Creator of this site and a web-developer",
        subHeading:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam facilis earum placeat distinctio eum asperiores unde rerum. Ea necessitatibus at incidunt temporibus beatae eaque eius saepe, eligendi rem, possimus inventore."
    })
    return (
        <AboutContainer>
            <Container>
                    <Row>
                        <Col col={3}>
                                 <AboutImage>
                                        <Image  src="/assets/images/bg.jfif" alt="Profile Image"/>
                                </AboutImage>
                        </Col>
                        <Col col={9}>
                            <AboutHeading>
                                    {state.heading}
                            </AboutHeading>
                            <Message margin={20} width={70} >{state.subHeading} </Message>
                        </Col>
                    </Row>
            </Container>
        </AboutContainer>
    )
}

export default About
