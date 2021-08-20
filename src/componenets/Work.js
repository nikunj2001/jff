import React, { useState } from 'react'
import { Workcontainer,WorkImage } from '../styled-components/WorkStyles';
import { Container,Image,Heading } from '../styled-components/SharedStyled';
import { Row,Col } from '../styled-components/GridStyles';
const Work = () => {
     const [state]= useState([

        {id:1,image:"/assets/images/work.jpg"},
        {id:2,image:"/assets/images/work.jpg"},
        {id:3,image:"/assets/images/work.jpg"},
        {id:4,image:"/assets/images/work.jpg"},
        {id:5,image:"/assets/images/work.jpg"},
        {id:6,image:"/assets/images/work.jpg"},
     ])
     
    return (
       
        <Workcontainer>
           <Container>
               <Heading>
                   My Favorates
               </Heading>
                <Row>
                {/* <Col col={4}></Col> */}
                {state.map(work=>(
                    <Col col={4}>
                            <WorkImage key={work.id}>
                                    <Image src={work.image} />
                            </WorkImage>
                    </Col>
                ))}
            </Row>
           </Container>
        </Workcontainer>
    )
}

export default Work
