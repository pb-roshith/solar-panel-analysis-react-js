import React from 'react'
import { useParams } from 'react-router-dom'
import { SolarData } from '../data/solarData'
import BarChartt from './barchart'
import { Container, Row, Col } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Piechartt from './piechart'
import RadarChartt from './radarchart'


const Dashboard = () => {
  const params = useParams();
  const item = SolarData.find((i) => i.id === parseInt(params.id))


  return (
    <>
      <div style={{backgroundColor:'black'}}>
          <p className='text-center display-1' style={{color:'#fff'}}>DASHBOARD</p>
        
          <Container>
            <Row style={{color:'#fff'}} className='p-5'>
              <Col className='m-3 d-flex justify-content-center align-items-center lead' style={{boxShadow:'0 0 10px 5px #FF06FF', height:'100px', borderRadius:'20px'}}>
                  {item.name}
              </Col>
              <Col className='m-3 pt-3 text-center' style={{boxShadow:'0 0 10px 5px #39FF14', height:'100px', borderRadius:'20px'}}>
                  
                  <p className='lead'>{item.status}</p>
                <p className='text-center'>status</p>
              </Col>
              <Col className='m-3 pt-3 text-center' style={{boxShadow:'0 0 10px 5px #FFD300', height:'100px', borderRadius:'20px'}}>
                <p className='lead'>{item.lastService}</p>
                <p className='text-center'>Last Service</p>
              </Col>
            </Row>

            <Row>
              <Col>
              <BarChartt data={item.barChartValue}/>
              </Col>
              <Col>
              
              <Piechartt thi={item.thisMonthEnergy} las={item.lastMonthEnergy}></Piechartt>
              </Col>
            </Row>

        <Row className='pt-5 mt-5 pb-5'>
          <Col>
            
           
            <Table striped bordered hover variant="dark">
      
      <tbody>
        
        <tr>
          <td><b>Capacity</b></td>
          <td>{item.capacity}</td>
        </tr>
        <tr>
          <td><b>Loss</b></td>
          <td>{item.loss}</td>
        </tr>
      </tbody>
    </Table>

    <Row className='pt-5 mt-5'>
      <Col className=''>
      <Card style={{ width: '18rem', boxShadow:'0 0 10px 5px  #FF0000', color:'#fff', backgroundColor:'black' }}>
      <Card.Body className='text-center'>
        <Card.Title>Energy Produced Today</Card.Title>
        <Card.Text>
          {item.todayEnergy}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
      <Col>
      <Card style={{ width: '18rem', boxShadow:'0 0 10px 5px #00CED1', color:'#fff', backgroundColor:'black' }}>
      <Card.Body className='text-center'>
        <Card.Title>This Month Producion</Card.Title>
        <Card.Text>
          {item.thisMonthEnergy} kWh
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
          </Col>
          <Col>
          <RadarChartt data={item.radarChartValue}></RadarChartt>
          </Col>
        </Row>
          </Container>
      </div>
    </>
  )
}

export default Dashboard