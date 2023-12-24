import React from 'react'
import { Row, Col, Container } from 'react-bootstrap' 
import {AiOutlinePhone, AiOutlineMail, AiOutlineYoutube, AiOutlineInstagram, AiOutlineFacebook, AiFillTwitterSquare} from 'react-icons/ai'
import {FaPinterestSquare, FaSearchLocation} from 'react-icons/fa'
import {GiRobotGolem} from 'react-icons/gi'

const Footer = () => {
  return (
    <>
        <div className='p-5' style={{backgroundColor:'black', color:'#fff', zIndex:'100',
        position:'relative'}}>
            <Container>
                <Row>
                    <Col className='mb-5' xs={12} sm={12} md={6} lg={3}>
                        <h1 className='text-center'>OUR ANALYSIS</h1>
                        <div className='pb-3'>
                        Our website provides quick and precise analysis of solar panel performance, guiding you towards a sustainable energy future. Make informed choices, harness the power of the sun!
                        </div>
                        <div className='d-flex justify-content-evenly' style={{fontSize:'2rem'}}>
                            <AiOutlineInstagram/>
                            <AiOutlineFacebook/>
                            <AiFillTwitterSquare/>
                            <AiOutlineYoutube/>
                            <FaPinterestSquare/>
                        </div>
                    </Col>
                    <Col className='mb-5' xs={12} sm={12} md={6} lg={3}>
                        <h1 className='text-center'>CONTACT US</h1>
                        <div>
                            <div className='d-flex'>
                                <div style={{fontSize:'1.7rem'}}>
                                    <FaSearchLocation/>
                                </div>
                                <div>
                                    <ul style={{listStyle:'none'}}>
                                        <li>
                                        AI-DS, Sri Sairam Institute of Technonlgy, west Tambaram, chennai-44.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div style={{fontSize:'1.7rem'}}>
                                    <AiOutlineMail/>
                                </div>
                                <div>
                                    <ul style={{listStyle:'none'}}>
                                        <li>roshithindia@gmail.com</li>
                                        <li>sit21ad029@sairamtap.edu.in</li>
                                    </ul>   
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div style={{fontSize:'1.7rem'}}>
                                    <AiOutlinePhone />
                                </div>
                                <div>
                                    <ul style={{listStyle:'none'}}>
                                        <li>+91 99405 04856</li>
                                        <li>+91 88383 16164</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='mb-5' xs={12} sm={12} md={6} lg={3}>
                        <div>
                            <h1 className='text-center'>OUR SERVICES</h1>
                                <ul style={{listStyle:'none'}}>
                                    <li><GiRobotGolem/> Performance Monitoring</li>
                                    <li><GiRobotGolem/> Data Analysis</li>
                                    <li><GiRobotGolem/> Energy Storage Solutions</li>
                                    <li><GiRobotGolem/> Maintenance Support</li>
                                    <li><GiRobotGolem/> Expert Recommendations</li>
                                </ul>
                        </div>
                    </Col>
                    <Col className='mb-5' xs={12} sm={12} md={6} lg={3}>
                        <Row>
                            <h1 className='text-center'>GALLERY</h1>
                            <Col className='p-1'>
                                <img style={{width:'100px', height:'100px', borderRadius:'10px', border:'4px solid grey'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1703171041/solar/WhatsApp_Image_2023-12-21_at_8.21.52_PM_e6bdeq.jpg" alt="" />
                            </Col>
                            <Col className='p-1'>
                                <img style={{width:'100px', height:'100px', borderRadius:'10px', border:'4px solid grey'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1703171041/solar/WhatsApp_Image_2023-12-21_at_8.12.04_PM_arye25.jpg" alt="" />
                            </Col>
                            <Col className='p-1'>
                                <img style={{width:'100px', height:'100px', borderRadius:'10px', border:'4px solid grey'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1703171041/solar/WhatsApp_Image_2023-12-21_at_8.08.04_PM_yws0pv.jpg" alt="" />
                            </Col>
                            <Col className='p-1'>
                                <img style={{width:'100px', height:'100px', borderRadius:'10px', border:'4px solid grey'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1703171270/solar/WhatsApp_Image_2023-12-21_at_8.37.16_PM_ycskej.jpg" alt="" />
                            </Col>
                            <Col className='p-1'>
                                <img style={{width:'100px', height:'100px', borderRadius:'10px', border:'4px solid grey'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1703171313/solar/WhatsApp_Image_2023-12-21_at_8.38.05_PM_t7ys1t.jpg" alt="" />
                            </Col>
                            <Col className='p-1'>
                                <img style={{width:'100px', height:'100px', borderRadius:'10px', border:'4px solid grey'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1703171382/solar/WhatsApp_Image_2023-12-21_at_8.12.20_PM_j9o266.jpg" alt="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='p-3 text-center' style={{backgroundColor:'grey', color:'#fff', zIndex:'100',
        position:'relative'}}>
            <p>Copyright @ 2023 <b>My Company</b> All Right Reserved.</p>
        </div>
    </>
  )
}

export default Footer
