import React from 'react'
import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ProfileImage from "../../images/pro-removebg-preview (1).png";

function New() {
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
       <div className="top">
        <h1>Add New User</h1>
       </div>
       <div className="bottom">
        <div className="left">
        <img src={ProfileImage} alt="" />
        </div>
        <div className="right">
          right
        </div>
       </div>
        data table
      </div>
    </div>
  )
}

export default New
