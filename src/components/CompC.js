import React from "react"

export default () => (
  <section className="comp__c">
    <div className="canvas">
      <div className="canvas__top">
        <div className="canvas__top-block">
          <h2>            
            My apps use React (GatsybJS), Flask, MySQL, Docker,
            Netlify, and DigitalOcean.
          </h2>
        {/* <p>Most of my projects
          are built with react.
        </p> */}
        </div>
        <div className="canvas__top-block">
        </div>
      </div>
      <div className="canvas__mid">
        <div className="canvas__mid-block">
        </div>
        <div className="canvas__mid-block">
        </div>
      </div>
      <div className="canvas__bottom">
        <div className="canvas__bottom-block yellow"></div>
        <div className="canvas__bottom-block">
          <h3>Skills</h3>
          <ul className="list">
            {
              [
                "Responsive web design",
                "RESTful APIs",
                "Ajax",
                "VPS hosting",
                "User authentication",                
              ].map(skill => (
                <li>{skill}</li>
              ))
            }
          </ul>
        </div>
        <div className="canvas__bottom-grid">
          <div className="bottom-grid__block"></div>
          <div className="bottom-grid__block"></div>
        </div>
        <div className="canvas__bottom-block">
          <h3>Languages</h3>
            <ul className="list">
              {
                [
                  "JavaScript",
                  "Python",
                  "SQL",
                  "CSS",
                  "HTML",
                ].map(skill => (
                  <li>{skill}</li>
                ))
              }
            </ul>
        </div>
      </div>
    </div>
  </section>
)