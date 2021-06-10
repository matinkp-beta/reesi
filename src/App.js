import React, { Component } from "react";

import './App.css';
import AvatarDisplay from "./components/avatar"
import { UserOutlined } from '@ant-design/icons';
import UploadPic from './components/upload'
import 'antd/dist/antd.css'
import Logo from "./index.jpg";
import Logo1 from "./logo.jpg";
import Tel from "./telegram.png"
import { Image } from 'antd';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App-root">
      
      <div className="App" style={{bottom:"0px"}}>
        <h1 style={{color:"white"}}>  <span style={{color:"red"}}> رای ما</span> دکتر صادق حسنی </h1> 

       <span></span>
        <h3 style={{color:"white"}}>عکس خود را آپلود کنید و خروجی با لیبل کاندید محبوب خود دریافت کنید</h3>
        
        <AvatarDisplay  icon={null} src={Logo}/>

       
        <UploadPic />
      </div>
      </div>
    );
  }
}
