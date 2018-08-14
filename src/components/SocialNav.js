import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faTwitter, faCodepen, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { Fade } from 'react-animation-components'

class SocialNav extends Component {
  render() {
    return (
      <div className="social-nav">

        <ul>
          <Fade duration={250} delay={750} in>
          <li>
            <a href="https://github.com/jonfurr">
              <FontAwesomeIcon icon={faGithub} color="#fbab5a" className="shadow" />
            </a>
          </li>
          </Fade>
          <Fade duration={250} delay={500} in>
          <li>
            <a href="https://twitter.com/jonfurr">
              <FontAwesomeIcon icon={faTwitter} color="#fbab5a" className="shadow"/>
            </a>
          </li>
          </Fade>
          <Fade duration={250} delay={250} in>
          <li>
            <a href="https://codepen.io/Jonfurr/">
              <FontAwesomeIcon icon={faCodepen} color="#fbab5a" className="shadow"/>
            </a>
          </li>
          </Fade>
          <Fade duration={250} delay={0} in>
          <li>
            <a href="https://www.linkedin.com/in/jonathanfurr/">
              <FontAwesomeIcon icon={faLinkedinIn} color="#fbab5a" className="shadow"/>
            </a>
          </li>
          </Fade>
        </ul>
      </div>
    )
  }
}

export default SocialNav