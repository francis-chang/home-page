import React from "react"
import "./about.css"

const About = () => (
  <div className="section">
    <div className="about-container">
      <h1>francis chang</h1>
      <h3>
        <span className="red">is</span>
        <span className="orange">(</span>korean, taiwanese, american
        <span className="orange">)</span>
      </h3>
      <h3>born(new Date("June 20, 1992")).in(california).raise(texas)</h3>
      <h3>love(art, basketball, swimming)</h3>
      <h3>
        {"{"}
        <br />
        <span className="indent">favorite movie: pulp fiction;</span>
        <br />
        <span className="indent">favorite show:gravity falls</span>
        <br />
        {"}"}
      </h3>
    </div>
  </div>
)

export default About
