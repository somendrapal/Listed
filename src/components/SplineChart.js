import React,{useState} from 'react';
import Chart from 'react-apexcharts';
import {
  Line,
  LineChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Tooltip
 
} from "recharts";
  const SplineChart = () => {
  
    const data = [
      { name: "       Week 1", Guest: 200, User: 400,  },
      { name: "Week 2", Guest: 400, User: 600,  },
      { name: "Week 3", Guest: 600, User: 200,  },
      { name: "Week 4", Guest: 400, User: 500,  },
     
    ];
  return (
    <div>
      <div className='span'>
            <Legend />
            </div>

      <LineChart  width={1000} height={200} data={data}>

        <Line type="monotone" dataKey="Guest" stroke='#E9A0A0' strokeWidth={3}/>
        <Line type="monotone" dataKey="User" stroke='#9BDD7C' strokeWidth={3}/>
        <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />

      </LineChart>
   </div>
  );
};

export default SplineChart;
