import { scaleLinear } from "d3-scale"
import { select } from "d3-selection"
import { curveCardinal, line } from "d3-shape"
import React, { useEffect, useRef, useState } from "react"
import "./experience.css"

const points = [
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

const Experience = ({ fullpageApi }) => {
  const [selection, setSelection] = useState(null)
  const [width, setWidth] = useState(window.innerWidth * 0.4)
  const [height, setHeight] = useState(150)

  const lineRef = useRef(null)
  const x = scaleLinear()
    .range([0, width])
    .domain([0, 20])

  const y = scaleLinear()
    .range([height, 0])
    .domain([0, 20])

  const lineChart = line()
    .x((d, i) => x(i))
    .y(d => y(d))
    .curve(curveCardinal)

  const renderLine = () => {
    if (selection) {
      selection
        .datum(points)
        .attr("d", lineChart)
        .attr("class", "line-chart")
        .attr("transform", `translate(20, 0)`)
    }
  }

  useEffect(() => {
    if (!selection) {
      if (window.innerWidth * 0.8 > 800) {
        setWidth(800)
      } else {
        setWidth(window.innerWidth * 0.8)
      }
      if (window.innerWidth < 800) {
        setHeight(100)
      } else {
        setHeight(150)
      }
      setSelection(select(lineRef.current))
      select(window).on("resize", () => {
        if (window.innerWidth * 0.8 > 800) {
          setWidth(800)
        } else {
          setWidth(window.innerWidth * 0.8)
        }
        if (window.innerWidth < 800) {
          setHeight(100)
        } else {
          setHeight(200)
        }
      })
    }
    renderLine()
  })
  return (
    <div className="section">
      <div className="experience-container">
        <svg width={width + 20} height={height}>
          <path ref={lineRef} />
        </svg>
        <div className="experience-list-container">
          <div className="age-listing-container">
            <div className="age">13</div>
            <div className="listing">messed around with CSS on Xanga</div>
          </div>
          <div className="age-listing-container">
            <div className="age">14</div>
            <div className="listing">fell in love with ubuntu</div>
          </div>
          <div className="age-listing-container">
            <div className="age">15</div>
            <div className="listing">
              cracked WEP keys with Backtrack 2 & 3 (Kali Linux)
            </div>
          </div>
          <div className="age-listing-container">
            <div className="age">16</div>
            <div className="listing">took AP Computer Science 1</div>
          </div>
          <div className="age-listing-container">
            <div className="age">17</div>
            <div className="listing">took AP Computer Science 2</div>
          </div>
          <div className="age-listing-container">
            <div className="age">18</div>
            <div className="listing">
              enrolled for Computer Science in the University of Texas @ Dallas
            </div>
          </div>
          <div className="age-listing-container">
            <div className="age">19</div>
            <div className="listing">dropped out</div>
          </div>
          <div className="age-listing-container">
            <div className="age">20</div>
            <div className="listing">
              built photo gallery websites with jquery
            </div>
          </div>
          <div className="age-listing-container">
            <div className="age">21</div>
            <div className="listing">learned django</div>
          </div>
          <div className="age-listing-container">
            <div className="age">22</div>
            <div className="listing">
              learned django-rest-framework with angular 1.5
            </div>
          </div>
          <div className="age-listing-container">
            <div className="age">23</div>
            <div className="listing">learned react and redux</div>
          </div>
          <div className="age-listing-container">
            <div className="age">24</div>
            <div className="listing">
              honed css and got comfortable with heroku, firebase, and digital
              ocean
            </div>
          </div>
          <div className="age-listing-container">
            <div className="age">25</div>
            <div className="listing">learned D3 and flask-restful</div>
          </div>
          <div className="age-listing-container">
            <div className="age">26</div>
            <div className="listing">
              built projects in postgres, flask, react, and d3
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
