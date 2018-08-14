import React, {Component} from "react"
import { Fade } from 'react-animation-components'

class Introduction extends Component {
  render() {
    return (
      <div>
        <div className="page-content">
          <Fade
            in
            duration={1000}
            delay={0}
          >
              <h1 className="page-title">
              <span>Hello! My name is
              </span>Jonathan Furr</h1>
          </Fade>
        </div>
      </div>
    )
  }
}

export default Introduction