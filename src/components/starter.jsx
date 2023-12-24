import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavUI from './NavUI'

const Starter = () => {
  return (
    <>
        <div style={{backgroundImage:'linear-gradient(135.8deg, rgb(26, 26, 29) 27.1%, rgb(111, 34, 50) 77.5%)'}}>
            <NavUI></NavUI>
            <div style={{paddingTop:'25px', paddingBottom:'25px'}}>
            <Container >
                <Row>
                    <Col className='text-center' style={{zIndex:'1'}}>
                        <p className='display-3' style={{color:'#fff'}}>Empower your solar journey with real-time insights</p>
                        <p className='pt-4' style={{color:'#fff'}}>Whether you're a homeowner, business owner, or renewable energy enthusiast, our platform empowers you with the information needed to make informed decisions about solar investments.</p>
                    </Col>
                    <Col syle={{zIndex:'0'}}>
                        <div style={{zIndex:'-10'}}>
                        <img style={{height:'400px', objectFit:'cover',  }} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1703165598/solar/new_dl4xed.png" alt="" />
                        <img style={{height:'400px', objectFit:'cover',  }} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1703165600/solar/original-b2d3dfb3b2aa0bcd9901618bea2db34e_o295c4.png" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
            
        </div>
    </>
  )
}

export default Starter