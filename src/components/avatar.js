import React, { Component } from 'react'
import { Avatar } from 'antd';
export default class AvatarDisplay extends Component {
  render() {
    return (
      <div>
        <Avatar
        style={{margin:"20px"}}
    size={{
      xs: 200,
      sm: 220,
      md: 250,
      lg: 300,
      xl: 300,
      xxl: 320,
    }}
    icon= {this.props.icon}
    src={this.props.src}
  />
      </div>
    )
  }
}


