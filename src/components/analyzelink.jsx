import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Analyzelink = () => {
  return (
    <>
        <div className='text-center' style={{color:'#fff', backgroundColor:'black'}} id="ana">
            <p className='display-1 pt-5'>Discover & Analyse The Solar Panel Data</p>
            <div>
                <Container>
                    <Row>
                        <Col>
                        <img style={{height:'400px'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1703173712/solar/APsystems-EMA-APP-PhotoRoom.png-PhotoRoom_wt3fvh.png" alt="" />
                        </Col>
                        <Col className='pt-5'>
                        <p className='pt-5 lead'>Our user-friendly interface provides real-time data, comparative reviews, and interactive tools, empowering you to navigate the solar landscape with confidence.</p>
                        <Button to='/nearSolar' as={Link} size="lg" variant="outline-warning">Analyse</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </>
  )
}

export default Analyzelink