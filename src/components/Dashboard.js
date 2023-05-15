import React from "react";
import { RiDashboard3Line } from "react-icons/ri";
import { BsTag } from "react-icons/bs";
import { MdScheduleSend } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";
import { CiSettings } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Total from "./Total";
import Vector from './vector.png'
import Transactions from './tag.png'
import Like from './image/like.png'
import User from './user.png'
import SplineChart from "./SplineChart";
import { Chart ,ArcElement,Tooltip,Legend,registerables  } from "chart.js";
import { Pie } from 'react-chartjs-2';
import {
    Line,
    LineChart,
    CartesianGrid,
    YAxis,
   
  } from "recharts";
  import 'chartjs-adapter-moment';

import PieChart from "./PieChart";

// ChartJS.register(
//   ArcElement,Tooltip,Legend
// )

const Dashboard = () => {
  const data1={
    datasets: [
      {
        data: [14,31, 51],
        backgroundColor: ['#EE8484', '#F6DC7D', '#98D89E'],
        hoverBackgroundColor: ['#EE8484', '#F6DC7D', '#98D89E'],
      },
    ],
  }
  const option={

  }
    const data = [
        { name: "       Week 1", react: 200, angular: 400,  },
        { name: "Week 2", react: 400, angular: 600,  },
        { name: "Week 3", react: 600, angular: 200,  },
        { name: "Week 4", react: 400, angular: 500,  },
       
      ];
  const icon1 = {
    position: "absolute",
    paddingleft: " 90%",
    height: "3.5%",
    right: "3.26%",
    top: "3.5%",
    width: "10%",
    bottom: "91.7%",
  };

  const icon = {
    position: "absolute",
    paddingleft: " 90%",
    height: "3.5%",
    right: "8.26%",
    top: "3.5%",
    width: "10%",
    bottom: "91.7%",
  };
  const iconStyle = {
    position: "absolute",
    top: " 5%",
    left: "79.5%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
  };
  return (
    <div className="dashboard">
      <div className="navbar">
        <h2 className="board">Board.</h2>
        <ul>
          <li>
            <RiDashboard3Line />
            &nbsp;&nbsp;
            <span class="item">
              <b>Dashboard</b>
            </span>
          </li>
          <li>
            <BsTag />
            &nbsp;&nbsp;
            <span class="item">Transactions</span>
          </li>
          <li>
            <MdScheduleSend />
            &nbsp;&nbsp;
            <span class="item">Schedules</span>
          </li>
          <li>
            <HiOutlineUserCircle />
            &nbsp;&nbsp;
            <span class="item">Users</span>
          </li>
          <li>
            <CiSettings />
            &nbsp;&nbsp;
            <span class="item">Settings</span>
          </li>
          <div className="help">
          <li>Help</li>
          <li>Contact Us</li>
          </div>
        </ul>
      </div>
      <div className="rightbar">
        <h2 className="dash">Dashboard</h2>
        <input type="text" placeholder="Search..." className="inputStyle" />
        <RiSearchLine className="search-icon" style={iconStyle} />
        <IoMdNotificationsOutline style={icon} />
        <CgProfile style={icon1} />
      </div>
      <Total color={"#DDEFE0"}  icon={Vector} value={"$2,129,430"} head={"Total Revenues"}/>
      <Total color={"#F4ECDD"} left={"40%"} icon={Transactions} value={"1,520"} head={"Total Transactions"}/>
      <Total color={"#EFDADA"} left={"60%"}  icon={Like} value={"9721"} head={"Total Likes"}/>
      <Total color={"#DEE0EF"} left={"80%"} icon={User} value={"892"} head={"Total User"}/>

<div className="graph">
    <h2 className="acitivity">Activities</h2>
    <p className="date">May - June 2021</p>  <div className="dot1">  <span class="dot" style={{marginLeft:"15%",background:"#E9A0A0"}}>&nbsp;&nbsp;&nbsp;&nbsp;Guest</span><span class="dot" style={{marginLeft:"25%",background:"#9BDD7C"}}>&nbsp;&nbsp;&nbsp;&nbsp;User</span></div>

   <br/>

    <SplineChart />

</div>
<div className="pie">
<h1 className="appoint">Top products
</h1>
<select className="see1" id="cars">
  <option value="volvo">May-June</option>
  <option value="saab">JUN-July</option>
  <option value="mercedes">July-Aug</option>
  <option value="audi">Aug-Sep</option>
</select>
<div style={{marginLeft:"-5%",marginTop:"8%",
width:"70%"}}>
  <Pie data={data1} option={option}></Pie>
  </div>
  <div>
  <span class="dot8" >&nbsp;&nbsp;&nbsp;&nbsp;
</span>
<h3 className="pieorg8">Basic Tees
</h3><p className="para55">
  55%


</p>
</div>
<div>

<span class="dot7" >&nbsp;&nbsp;&nbsp;&nbsp;
</span>
<h3 className="pieorg">Custom Short Pants
</h3>
<p className="para31">
  31%


</p>
</div>
<div>

  <span class="dot6" >&nbsp;&nbsp;&nbsp;&nbsp;
</span>
<h3 className="pieorg">Super Hoodies</h3>
<p className="para14">
  14%


</p>
</div>
</div>
<div className="pie1">
<h1 className="appoint">Today’s schedule</h1>
<h6 className="see">See All</h6>
<div className="line1">
  </div>
<spna className="list">
  Meeting with suppliers from Kuta Bali

  </spna>
  <h6 className="tim" style={{marginTop:"13%",marginLeft:"12%"}}>14.00-15.00</h6>
  <h6 className="adres" style={{marginTop:"-3%",marginLeft:"12%"}}>at Sunset Road, Kuta, Bali
</h6>

<div className="line2">
 
</div>
<spna className="list1">
Check operation at Giga Factory 1


  </spna>
  <h6 className="tim" style={{marginTop:"15%",marginLeft:"12%"}}>18.00-20.00
</h6>
  <h6 className="adres" style={{marginTop:"-3%",marginLeft:"12%"}}>at Central Jakarta

</h6>
</div>
    </div>
  );
};

export default Dashboard;
