import React, { Component } from "react";

import './App.css';
import AvatarDisplay from "./components/avatar"
import { UserOutlined } from '@ant-design/icons';
import UploadPic from './components/upload'
import 'antd/dist/antd.css'
import Logo from "./index1.jpg";
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
        <h1 style={{color:"white"}}> دولت مردمی خادم مردم سید ابراهیم رئیسی</h1>

       
        <h3 style={{color:"white"}}>عکس خود را آپلود کنید و خروجی با لیبل کاندید محبوب خود دریافت کنید</h3>
        <h4 style={{color:"white"}}>کانال تلگرام ما را دنبال کنید</h4>
        <a
        href={`https://t.me/raisi_daneshjo_hmd`}>
         <Image
        preview={false}
      width={50}
      src={Tel}
    />

      </a>
    <br/>
      
        <Image
        preview={false}
      width={150}
      src={Logo1}
    />
        <AvatarDisplay  icon={null} src={Logo}/>

       
        <UploadPic />
      </div>
      </div>
    );
  }
}
