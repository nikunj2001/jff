import React, { useState } from 'react'
import { Skillscontainer,SkillsBlock,SkillsName,SkillsValue,ProgressBar } from '../styled-components/SkillsStyle'
import { Container,Heading,Message } from '../styled-components/SharedStyled'
import { Row,Col} from '../styled-components/GridStyles'
import { Fragment } from 'react'
const Skills = () => {
    const [state] =useState({
        heading:"My Skills",
                subHeading:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, recusandae? Laboriosam repellat voluptas explicabo provident, nemo, amet eaque nobis ea atque voluptatum cumque illum ab dolores quibusdam neque, delectus natus?subHeading"
    });
    const [myskills] = useState([
        {id:1,name:"Fucking",value:80},
        {id:2,name:"ForePaly",value:85},
        {id:3,name:"Fingering",value:70},
        {id:4,name:"Satifying",value:90},
        {id:5,name:"Oral Sex",value:80},
        {id:6,name:"Sucking",value:95},
    ])
    return (
        <Skillscontainer>

        <Container>
            <Row>
                <Col col={6}>
                    <Heading>
                        {state.heading}
                    </Heading>
                    <Message>{state.subHeading}</Message>
                </Col>
                 <Col col={6}>
                {
                    myskills.map(skill=>(
                                <Fragment key={skill.id}>

                                <SkillsBlock  >
                                    <SkillsName>{skill.name}</SkillsName>
                                    <SkillsName>{skill.value}%</SkillsName>
                                </SkillsBlock>
                                    <ProgressBar max="100" value={skill.value}/>
                                </Fragment>
                    ))
                }
                 </Col>
            </Row>
        </Container>
        </Skillscontainer>

    )
}

export default Skills
