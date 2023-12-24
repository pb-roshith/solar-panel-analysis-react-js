import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import {SolarData} from '../data/solarData';


const NearSolar = () => {
  const navigate = useNavigate()
  return (
    <>
      <div style={{height:'150vh', color:'#fff'  ,backgroundImage:'radial-gradient(circle, rgba(106,13,25,1) 12%, rgba(34,7,66,1) 54%, rgba(121,9,66,1) 100%, rgba(0,212,255,1) 100%)'}}>
      <p style={{}} className='display-1 text-center pt-4'>Available Solar Panel</p>
        <div className='m-5'>
        <Container >
          <Row >
            {SolarData.map(i => {
              return (
                <Col key={i.id} xs={6} role='button' onClick={() => navigate(`/dashboard/${i.id}`)}>
                  <div style={{position: 'relative',
    width: '100%',
    height: '150px',
    background: 'transparent',
    overflow: 'hidden',}}>
                  <div className='text-center m-3 p-2' style={
    {
      content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    border: '8px solid transparent',
    borderRadius: '30px',
    backgroundImage: 'linear-gradient(45deg, red, blue)',}}>
                    <p className='lead'>{i.name}</p>
                    <hr />
                    <p>{i.status} ⚡</p>
                  </div>
                  </div>
                  
                </Col>
              )
            })}
          </Row>
        </Container>
        </div>
        
      </div>
    </>
  )
}

export default NearSolar