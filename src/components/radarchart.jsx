import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from 'recharts';


const RadarChartt = ({data}) => {
  return (
    <>
    <div style={{boxShadow:'0 0 10px 5px #FFA500', borderRadius:'20px'}}>
    <p className='text-center h5' style={{color:'#fff'}}>Last 5 month Production</p>
    <ResponsiveContainer width="100%" height={400}>
    <RadarChart outerRadius={150} data={data}>
      <PolarGrid stroke="#7FFF00" />
      <PolarAngleAxis dataKey="month" tick={{ fill: 'pink', fontSize: 12 }} />
      <PolarRadiusAxis angle={30} domain={[0, 160]} tick={{ fill: '#00C8FF', fontSize: 10 }} />
      <Radar name="Power Production" dataKey="power" stroke="#00C8FF" fill="#8884d8" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
  </ResponsiveContainer>
    </div>
    </>
    
  );
};

export default RadarChartt;
