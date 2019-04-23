import React from "react"

export default () => (
  <section className="comp__three">
    <div className="canvas">
      <div className="canvas__top">
        <div className="canvas__top-block">
        <h2>I am David Crandall, a full stack web developer.</h2>
        </div>
        <div className="canvas__top-block"></div>
      </div>
      <div className="canvas__bottom">
        <div className="canvas__bottom-block"></div>
        <div className="canvas__bottom-grid">
          <div className="bottom-grid__block">
            <div className="grid-block--white">
            <h2>
                I design and build front-end applications, as well as the APIs
                that power them. <a href="">Projects</a>
              </h2>
              </div>
            <div className="grid-block--yellow">
              <a className="btn" href="">Blog</a>
            </div>
            <div className="grid-block--black">
              <a className="btn" href="">Email me</a>
            </div>            
          </div>
          <div className="bottom-grid__block">
              <a className="btn" href=""><span>Github</span></a>            
            </div>
        </div>
      </div>
    </div>
  </section>
)
