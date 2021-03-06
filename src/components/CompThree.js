import React from "react"
import  { Link } from "gatsby";

export default () => (
  <section className="comp__three">
    <div className="canvas">
      <div className="canvas__top">
        <div className="canvas__top-block">
          {/* br's, I know, but this is actually a decent use case */}
          <h2>
            David Crandall
            <br/>
            full stack 
            <br/>
            web developer.
            <br/>            
          </h2>
        </div>
        <div className="canvas__top-block" />
      </div>
      <div className="canvas__bottom">
        <div className="canvas__bottom-block" />
        <div className="canvas__bottom-grid">
          <div className="bottom-grid__block">
            <div className="grid-block--white">
              <h2>
                I build front-end applications and the APIs
                that power them.                                
              </h2>
            </div>
            <div className="grid-block--yellow">
              <a
                className="btn"
                href="https://dacrands.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </div>
            <div className="grid-block--black">
              <a className="btn" href="mailto:davecrands@gmail.com">
                Email me
              </a>
            </div>
          </div>
          <div className="bottom-grid__block">
            <a
              className="btn"
              href="https://github.com/dacrands"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)
