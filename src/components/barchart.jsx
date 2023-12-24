// Import necessary modules
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data


// BarChart component
const BarChartt = ({data}) => {
  return (
    <>
      <div style={{boxShadow:'0 0 10px 5px #00BFFF', borderRadius:'20px'}}>
      <p className='text-center h5' style={{color:'#fff'}}>Last 9 Days Output</p>
      <BarChart
      
      width={600}
      height={400}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="output" fill="#8A2BE2" />
    </BarChart>
      </div>
      
    </>
    
  );
};

export default BarChartt;
