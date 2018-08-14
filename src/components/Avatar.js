import React, {Component} from 'react'
import { Fade } from 'react-animation-components'

class Avatar extends Component {
  render(){
    return (
      <div className="avatar-container">
        <Fade in duration={1000} delay={0}>
        <img src='/avatar.jpg' alt="Jonathan Furr Avatar" />
        </Fade>
      </div>
    )
  }
}

export default Avatar