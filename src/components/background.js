import React from 'react'
import Particles from "react-particles-js"
import "../css/index.css"

const Background = () => (
  <Particles
    className="particles"
      params={{
        "particles": {
            "number": {
                "value": 400,
                "density": {
                    "enable": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "speed": 4,
                    "size_min": 0.3
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "random": true,
                "speed": 1,
                "direction": "bottom",
                "out_mode": "out"
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                }
            },
            "modes": {
                "bubble": {
                    "distance": 250,
                    "duration": 2,
                    "size": 3.5,
                    "opacity": .3
                }
            }
        }
    }}/>
  )

  export default Background
