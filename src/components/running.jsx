import React from 'react'
import './running.css'

const Running = () => {
  return (
    <>
        <div style={{backgroundImage:'radial-gradient(circle, rgba(10,7,66,1) 11%, rgba(121,9,66,1) 99%, rgba(0,212,255,1) 100%)', height:'50px', zIndex:'100',
        position:'relative'}}>
            <div className="position-relative marquee-container d-none d-sm-block">
                <div className="marquee d-flex justify-content-around">
                    <p className='fw-bold lead' style={{color:'#fff', textShadow:'0 0 3px #FF0000'}}> Unlock the potential of sustainable energy with our user-friendly interface, interactive visualizations, and expert recommendations.</p>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default Running