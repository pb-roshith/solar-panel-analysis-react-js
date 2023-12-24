import React from 'react'
import Starter from './starter'
import Running from './running'
import ContactForm from './contact'
import SolarPanelMonitoringSystem from './description'
import Analyzelink from './analyzelink'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
      <Starter></Starter>
      <Running></Running>
      <SolarPanelMonitoringSystem></SolarPanelMonitoringSystem>
      <Analyzelink></Analyzelink>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  )
}

export default Home