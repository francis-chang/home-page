import { library } from "@fortawesome/fontawesome-svg-core"
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { easeBounceOut } from "d3-ease"
import { scaleLinear } from "d3-scale"
import { select } from "d3-selection"
import "d3-transition"
import React, { useEffect, useRef, useState } from "react"
import { animated, useSpring } from "react-spring"
import "./tech.css"

library.add(faArrowDown, faArrowUp)

let points = [
  2,
  4,
  10,
  8,
  9,
  14,
  8,
  5,
  3,
  2,
  5,
  7,
  8,
  10,
  11,
  15,
  11,
  14,
  12,
  17,
]

const Tech = () => {
  const barRef = useRef(null)
  const [height, setHeight] = useState(150)
  const [width, setWidth] = useState(800)
  const [set, setSet] = useState(false)

  const [jsToggle, setJsToggle] = useState(false)
  const [rToggle, setRToggle] = useState(false)
  const [pToggle, setPToggle] = useState(false)
  const [cToggle, setCToggle] = useState(false)
  const [resize, setResize] = useState(false)
  const [interval, setInt] = useState(null)

  let y = scaleLinear()
    .range([height, 0])
    .domain([0, 20])
  let x = scaleLinear()
    .range([0, width])
    .domain([0, 20])

  const [selection, setSelection] = useState(null)

  useEffect(() => {
    if (window.innerWidth < 800 && width === 800) {
      setWidth(window.innerWidth * 0.8)
      setHeight(100)
    }

    if (resize) {
      renderChart()
      setResize(false)
    }
    if (!selection) {
      setSelection(select(barRef.current))
      setSet(true)
      window.addEventListener("resize", () => {
        if (window.innerWidth > 800) {
          setWidth(800)
          setHeight(150)
          setResize(true)
        } else {
          setWidth(window.innerWidth * 0.85)
          setHeight(100)
          setResize(true)
        }
      })
    }
    if (set) {
      renderChart()
      setSet(false)
    }
  })

  const renderChart = () => {
    if (selection) {
      if (interval) {
        clearInterval(interval)
      }
      y = scaleLinear()
        .range([height, 0])
        .domain([0, 20])
      x = scaleLinear()
        .range([0, width])
        .domain([0, 20])
      setInt(setInterval(transitionBar, 4500))
      transitionBar()
    }
  }

  const transitionBar = () => {
    selection
      .selectAll("rect")
      .data([])
      .exit()
      .remove()

    selection
      .selectAll("rect")
      .data(points)
      .enter()
      .append("rect")
    selection
      .selectAll("rect")
      .data(points)
      .attr("x", (d, i) => x(i))
      .attr("width", `${width / 24}px`)
      .attr("fill", "#ffc970")
      .attr("y", d => y(0))
      .attr("height", 0)
      .transition()
      .delay((d, i) => i * 70)
      .ease(easeBounceOut)
      .duration(500)
      .attr("y", d => y(d))
      .attr("height", d => height - y(d))
      .transition()
      .delay(d => 2200)
      .duration(500)
      .ease(easeBounceOut)
      .attr("y", d => y(0))
      .attr("height", 0)
  }
  const jsAniamte = useSpring({
    height: jsToggle
      ? window.innerWidth > 800
        ? "13.5rem"
        : "10.5rem"
      : "0rem",
    overflow: "hidden",
  })
  const rAnimate = useSpring({
    height: rToggle
      ? window.innerWidth > 800
        ? "16.5rem"
        : "13.5rem"
      : "0rem",
    overflow: "hidden",
  })
  const pAnimate = useSpring({
    height: pToggle ? (window.innerWidth > 800 ? "15rem" : "12.3rem") : "0rem",
    overflow: "hidden",
  })
  const cAnimate = useSpring({
    height: cToggle ? "20rem" : "0rem",
    overflow: "hidden",
  })

  const jsClick = () => {
    if (rToggle) {
      setRToggle(false)
    }
    if (cToggle) {
      setCToggle(false)
    }
    if (pToggle) {
      setPToggle(false)
    }
    setJsToggle(!jsToggle)
  }

  const rClick = () => {
    if (jsToggle) {
      setJsToggle(false)
    }
    if (cToggle) {
      setCToggle(false)
    }
    if (pToggle) {
      setPToggle(false)
    }
    setRToggle(!rToggle)
  }

  const pClick = () => {
    if (jsToggle) {
      setJsToggle(false)
    }
    if (rToggle) {
      setRToggle(false)
    }
    if (cToggle) {
      setCToggle(false)
    }
    setPToggle(!pToggle)
  }

  const cClick = () => {
    if (jsToggle) {
      setJsToggle(false)
    }
    if (rToggle) {
      setRToggle(false)
    }
    if (pToggle) {
      setPToggle(false)
    }
    setCToggle(!cToggle)
  }
  return (
    <div className="section">
      <div className="tech-container">
        <svg width={width} height={height} ref={barRef}></svg>
        <div className="color-container">
          <div className="orange">proficient</div>
          <div className="light-orange">familiar</div>
          <div>used 1-2x</div>
        </div>
        <div className="accordion-container">
          <div className="accordion-head" onClick={jsClick}>
            javascript{" "}
            <FontAwesomeIcon
              className={
                jsToggle
                  ? "arrow-icon arrow-transition-two"
                  : "arrow-transition arrow-icon"
              }
              icon={jsToggle ? "arrow-up" : "arrow-down"}
            />
          </div>
          <animated.div style={jsAniamte}>
            <div className="tech-listing-container">
              <div className="tech-listing orange">typescript</div>
              <div className="tech-listing orange">d3</div>
              <div className="tech-listing light-orange">jest</div>
              <div className="tech-listing ">angular 1.5</div>
              <div className="tech-listing ">jquery</div>
              <div className="tech-listing ">express</div>
              <div className="tech-listing ">infernojs</div>
            </div>
          </animated.div>
          <div className="accordion-head" onClick={rClick}>
            react
            <FontAwesomeIcon
              className={
                rToggle
                  ? "arrow-icon arrow-transition-two"
                  : "arrow-transition arrow-icon"
              }
              icon={rToggle ? "arrow-up" : "arrow-down"}
            />
          </div>
          <animated.div style={rAnimate}>
            <div className="tech-listing-container">
              <div className="tech-listing orange">redux (thunk, saga)</div>
              <div className="tech-listing orange">react-spring</div>
              <div className="tech-listing orange">styled-components</div>
              <div className="tech-listing orange">react-router</div>
              <div className="tech-listing light-orange">gatsby</div>
              <div className="tech-listing light-orange">nextjs</div>
              <div className="tech-listing light-orange">
                react-transition-group
              </div>
              <div className="tech-listing">formik</div>
              <div className="tech-listing ">storybook</div>
            </div>
          </animated.div>
          <div className="accordion-head" onClick={pClick}>
            python
            <FontAwesomeIcon
              className={
                pToggle
                  ? "arrow-icon arrow-transition-two"
                  : "arrow-transition arrow-icon"
              }
              icon={pToggle ? "arrow-up" : "arrow-down"}
            />
          </div>
          <animated.div style={pAnimate}>
            <div className="tech-listing-container">
              <div className="tech-listing orange">flask-RESTful</div>
              <div className="tech-listing orange">flask-jwt-extended</div>
              <div className="tech-listing orange">sqlalchemy</div>
              <div className="tech-listing light-orange">marshmallow</div>
              <div className="tech-listing light-orange">oauthlib</div>
              <div className="tech-listing light-orange">
                django-rest-framework
              </div>
              <div className="tech-listing ">django</div>
              <div className="tech-listing ">celery</div>
            </div>
          </animated.div>
          <div className="accordion-head" onClick={cClick}>
            cloud
            <FontAwesomeIcon
              className={
                cToggle
                  ? "arrow-icon arrow-transition-two"
                  : "arrow-transition arrow-icon"
              }
              icon={cToggle ? "arrow-up" : "arrow-down"}
            />
          </div>
          <animated.div style={cAnimate}>
            <div className="tech-listing-container">
              <div className="tech-listing light-orange">firebase</div>
              <div className="tech-listing light-orange">heroku</div>
              <div className="tech-listing light-orange">digital ocean</div>
              <div className="tech-listing light-orange">cloudinary</div>
              <div className="tech-listing light-orange">postgres</div>
              <div className="tech-listing">sendgrid</div>
              <div className="tech-listing ">mongo</div>
              <div className="tech-listing ">redis</div>
              <div className="tech-listing ">nginx</div>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  )
}

export default Tech
