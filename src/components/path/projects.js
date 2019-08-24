import { library } from "@fortawesome/fontawesome-svg-core"
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { easeElastic } from "d3-ease"
import { interpolate } from "d3-interpolate"
import { select } from "d3-selection"
import { arc } from "d3-shape"
import "d3-transition"
import React, { useEffect, useRef, useState } from "react"
import { animated, useSpring } from "react-spring"
import "./projects.css"

library.add(faArrowDown, faArrowUp)

let fields = [
  {
    value: 12,
    size: 12,
    label: "h",
    update: function(date) {
      if (date.getHours() % 12 === 0) {
        return 12
      }
      return date.getHours() % 12
    },
  },
  {
    value: 60,
    size: 60,
    label: "m",
    update: function(date) {
      return date.getMinutes()
    },
  },
  {
    value: 60,
    size: 60,
    label: "s",
    update: function(date) {
      return date.getSeconds()
    },
  },
]

const Projects = () => {
  const svgRef = useRef(null)
  const [width, setWidth] = useState(800)
  const [height, setHeight] = useState(200)
  const [selection, setSelection] = useState(null)
  const [interval, setInter] = useState(null)
  const [ren, setRen] = useState(false)

  const [pollToggle, setPollToggle] = useState(false)
  const [audioToggle, setAudioToggle] = useState(false)
  const [shipmentToggle, setShipmentToggle] = useState(false)
  const [instaToggle, setInstaToggle] = useState(false)
  const [minervaToggle, setMinervaToggle] = useState(false)
  useEffect(() => {
    if (window && window.innerWidth < 800) {
      setWidth(window.innerWidth)
    }
    const resize = () => {
      if (interval) {
        clearInterval(interval)
      }
      if (window.innerWidth > 800) {
        setWidth(800)
        setRen(true)
      } else {
        setWidth(window.innerWidth * 0.8)
        setRen(true)
      }
    }
    if (!selection) {
      setSelection(select(svgRef.current))
      window.addEventListener("resize", resize)
      setRen(true)
    }
    if (ren) {
      renderClock()
      setRen(false)
    }
  })
  const renderClock = () => {
    if (selection) {
      if (interval) {
        clearInterval(interval)
      }
      selection.selectAll("*").remove()
      for (let x = 0; x < fields.length; x++) {
        if (x === 0) {
          fields[x].value = 12
        } else {
          fields[x].value = 60
        }
      }

      const clockArc = arc()
        .innerRadius(width / 8 - 25)
        .outerRadius(width / 8 - 5)
        .startAngle(0)
        .endAngle(d => (d.value / d.size) * 2 * Math.PI)

      if (window && window.innerWidth < 800) {
        clockArc
          .innerRadius(window.innerWidth / 8 - 25)
          .outerRadius(window.innerWidth / 8 - 10)
          .startAngle(0)
          .endAngle(d => (d.value / d.size) * 2 * Math.PI)
      }
      if (window && window.innerWidth < 600) {
        clockArc
          .innerRadius(window.innerWidth / 7 - 20)
          .outerRadius(window.innerWidth / 7 - 10)
          .startAngle(0)
          .endAngle(d => (d.value / d.size) * 2 * Math.PI)
      }

      selection.attr("width", width).attr("height", height)

      let field = selection
        .selectAll(".field")
        .data(fields)
        .enter()
        .append("g")
        .attr(
          "transform",
          (d, i) =>
            `translate(${((i * 2 + 1.25) / 6.5) * width}, ${height / 2})`
        )
        .attr("class", "field")

      field
        .append("path")
        .attr("class", "path path--background")
        .attr("d", clockArc)

      let path = field.append("path").attr("class", "path path--foreground")

      let label = field
        .append("text")
        .attr("class", "label")
        .attr("font-size", window && window.innerWidth < 800 ? "30px" : "50px")
        .attr("dy", ".35em")

      function arcTween(b) {
        var i = interpolate({ value: b.previous }, b)
        return function(t) {
          return clockArc(i(t))
        }
      }

      const update = () => {
        let now = new Date()
        field.each(d => {
          d.previous = d.value
          d.value = d.update(now)
        })

        path
          .transition()
          .ease(easeElastic)
          .duration(750)
          .attrTween("d", arcTween)
        label.text(d => d.value)
      }
      setInter(setInterval(update, 1000))
      update()
    }
  }

  const pollAnimate = useSpring({
    width: "100%",
    height: pollToggle ? "10rem" : "0rem",
    overflow: "hidden",
  })
  const audioAnimate = useSpring({
    width: "100%",
    height: audioToggle ? "10rem" : "0rem",
    overflow: "hidden",
  })
  const shipmentAnimate = useSpring({
    width: "100%",
    height: shipmentToggle ? "11rem" : "0rem",
    overflow: "hidden",
  })
  const instaAnimate = useSpring({
    width: "100%",
    height: instaToggle ? "15rem" : "0rem",
    overflow: "hidden",
  })
  const minervaAnimate = useSpring({
    width: "100%",
    height: minervaToggle ? "10rem" : "0rem",
    overflow: "hidden",
  })

  const pollClick = () => {
    if (audioToggle) {
      setAudioToggle(false)
    }
    if (shipmentToggle) {
      setShipmentToggle(false)
    }
    if (instaToggle) {
      setInstaToggle(false)
    }
    if (minervaToggle) {
      setMinervaToggle(false)
    }
    setPollToggle(!pollToggle)
  }

  const audioClick = () => {
    if (pollToggle) {
      setPollToggle(false)
    }
    if (shipmentToggle) {
      setShipmentToggle(false)
    }
    if (instaToggle) {
      setInstaToggle(false)
    }
    if (minervaToggle) {
      setMinervaToggle(false)
    }
    setAudioToggle(!audioToggle)
  }

  const shipmentClick = () => {
    if (pollToggle) {
      setPollToggle(false)
    }
    if (audioToggle) {
      setAudioToggle(false)
    }
    if (instaToggle) {
      setInstaToggle(false)
    }
    if (minervaToggle) {
      setMinervaToggle(false)
    }
    setShipmentToggle(!shipmentToggle)
  }

  const instaClick = () => {
    if (pollToggle) {
      setPollToggle(false)
    }
    if (audioToggle) {
      setAudioToggle(false)
    }
    if (shipmentToggle) {
      setShipmentToggle(false)
    }
    if (minervaToggle) {
      setMinervaToggle(false)
    }
    setInstaToggle(!instaToggle)
  }

  const minervaClick = () => {
    if (pollToggle) {
      setPollToggle(false)
    }
    if (audioToggle) {
      setAudioToggle(false)
    }
    if (shipmentToggle) {
      setShipmentToggle(false)
    }
    if (instaToggle) {
      setInstaToggle(false)
    }
    setMinervaToggle(!minervaToggle)
  }
  return (
    <div className="section">
      <div className="projects-container">
        <svg ref={svgRef}></svg>
        <div className="projects-list-container">
          <div
            name="shipment"
            className="projects-listing"
            onClick={shipmentClick}
          >
            shipment tracker{" "}
            <FontAwesomeIcon
              className={
                shipmentToggle
                  ? "arrow-icon arrow-transition-two"
                  : "arrow-transition arrow-icon"
              }
              icon={shipmentToggle ? "arrow-up" : "arrow-down"}
            ></FontAwesomeIcon>
          </div>
          <animated.div style={shipmentAnimate}>
            <div className="animation-drop">
              projected flights ontop of d3-geo USA map with information on
              coordinates, cargo, landing estimates, flight duration, speed, and
              altitude and shipment fulfillment information
              <div className="links-container">
                <a
                  href="https://distracted-wozniak-3a4b78.netlify.com/tracking"
                  target="_blank"
                  className="example-button"
                >
                  example
                </a>
                <a
                  href="https://github.com/zfc9d3f/dashboard-fin"
                  target="_blank"
                  className="github-button"
                >
                  github
                </a>
              </div>
            </div>
          </animated.div>
          <div name="audio" className="projects-listing" onClick={audioClick}>
            d3 & css tutorials
            <FontAwesomeIcon
              className={
                audioToggle
                  ? "arrow-icon arrow-transition-two"
                  : "arrow-transition arrow-icon"
              }
              icon={audioToggle ? "arrow-up" : "arrow-down"}
            ></FontAwesomeIcon>
          </div>
          <animated.div style={audioAnimate}>
            <div className="animation-drop">
              i make youtube educationals on d3 and css topics. i mostly make
              videos on how to integrate d3 to a react and typescript setting.
              <div className="links-container">
                <a
                  href="https://www.youtube.com/channel/UCHtLTNWrpDl_kwy3oOIiy9Q"
                  target="_blank"
                  className="github-button"
                >
                  youtube
                </a>
              </div>
            </div>
          </animated.div>
          <div name="clone" className="projects-listing" onClick={instaClick}>
            photoblog platform{" "}
            <FontAwesomeIcon
              className={
                instaToggle
                  ? "arrow-icon arrow-transition-two"
                  : "arrow-transition arrow-icon"
              }
              icon={instaToggle ? "arrow-up" : "arrow-down"}
            ></FontAwesomeIcon>
          </div>

          <animated.div style={instaAnimate}>
            <div className="animation-drop">
              built a service in flask-RESTful, utilizing sendgrid and
              flask-oauthlib for email authorization handling and oauth
              connections with github. utilized styled components and CSS and
              javascript animations for the UI, and had cloudinary deal with
              image hosting and transformations
              <div className="links-container">
                <a
                  className="github-button"
                  href="https://vimeo.com/350891768"
                  target="_blank"
                  style={{ marginRight: "1rem" }}
                >
                  explanation
                </a>
                <a
                  href="https://github.com/zfc9d3f/bettergram-front"
                  target="_blank"
                  className="github-button"
                >
                  github
                </a>
              </div>
            </div>
          </animated.div>

          <div name="clone" className="projects-listing" onClick={minervaClick}>
            landing/hero test
            <FontAwesomeIcon
              className={
                minervaToggle
                  ? "arrow-icon arrow-transition-two"
                  : "arrow-transition arrow-icon"
              }
              icon={minervaToggle ? "arrow-up" : "arrow-down"}
            ></FontAwesomeIcon>
          </div>
          <animated.div style={minervaAnimate}>
            <div className="animation-drop">
              used adobe illustrator and Humaaans to design the svgs for a hero
              / landing page. built with styled-components and gatsby.
              <div className="links-container">
                <a
                  href="https://ecstatic-einstein-2f00b4.netlify.com/"
                  target="_blank"
                  className="example-button"
                >
                  example
                </a>
                <a
                  href="https://github.com/zfc9d3f/minerva-health-cra"
                  target="_blank"
                  className="github-button"
                >
                  github
                </a>
              </div>
            </div>
          </animated.div>

          <div name="poll" className="projects-listing" onClick={pollClick}>
            poll{" "}
            <FontAwesomeIcon
              className={
                pollToggle
                  ? "arrow-icon arrow-transition-two"
                  : "arrow-transition arrow-icon"
              }
              icon={pollToggle ? "arrow-up" : "arrow-down"}
            ></FontAwesomeIcon>
          </div>
          <animated.div style={pollAnimate}>
            <div className="animation-drop">
              A platform built with Flask-Restful and Postgres with React and D3
              for bar charts where users can sign up and poll or vote.
              <div className="links-container">
                <a
                  href="https://poll-c4248.firebaseapp.com/"
                  target="_blank"
                  className="example-button"
                >
                  example
                </a>
                <a
                  className="github-button"
                  href="https://streamable.com/c1anv"
                  target="_blank"
                  style={{ marginRight: "1rem" }}
                >
                  explanation
                </a>
                <a
                  href="https://github.com/zfc9d3f/poll-backend"
                  target="_blank"
                  className="github-button"
                >
                  github
                </a>
              </div>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  )
}

export default Projects
