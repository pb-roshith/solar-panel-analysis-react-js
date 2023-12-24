import React from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const Piechartt = ({thi, las}) => {

    let x=thi;
    let y=las;

    

    const data=[
        {
            name:'This Month Production',
            energy:x
        },
        {
            name:'Last Month Production',
            energy:y
        },
    ]

    const COLORS = ['#00FFFF', '#FF06FF'];

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

  return (
    <> 
      <p className='text-center h5' style={{color:'#fff'}}>Last Month vs This Month</p>
        <div className='text-center' style={{paddingLeft:'120px'}}>
        
        <PieChart width={400} height={400}>
      <Pie
        dataKey="energy"
        data={data}
        cx={200}
        cy={200}
        outerRadius={140}
        innerRadius={100}
        fill="pink"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
      <Tooltip content={<CustomTooltip />} />
    </PieChart>
        </div>
    </>
  )
}

export default Piechartt