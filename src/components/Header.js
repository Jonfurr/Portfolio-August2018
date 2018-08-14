import React, {Component} from 'react'
import SocialNav from './SocialNav'
import Avatar from './Avatar'
import {Fade, Transform} from 'react-animation-components'

class Header extends Component {
  render() {
    return (
      <div className="App-header">
          <div className="brand">
          <Fade duration={1000} in>
            <h1 className="shadow">
              J<span>onathan </span>
              F<span>urr</span>
            </h1>
          </Fade>
          <Fade duration={500} delay={1000} in>
            <h5 className="shadow">
              WebDeveloper | MusicMaker | PixelPusher
            </h5>
          </Fade>
        </div>
        <Avatar/>
        <SocialNav/>
      </div>
    )
  }
}
export default Header