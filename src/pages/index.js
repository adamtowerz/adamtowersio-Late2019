import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "../styles/fontawesome/css/fontawesome.min.css"
import "../styles/fontawesome/css/brands.min.css"
import "../styles/base.css"
import "../styles/theme.css"
import "./index.css"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className="center-hv">
      <h1>
        Hi, I'm <span className="color-primary">Adam</span>.
      </h1>
      <ul id="socials">
        <li>
          <a
            href="https://twitter.com/realAdamTowers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/adam-towers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Zarkoix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
      <ul id="links">
        <li>
          <a href="https://drive.google.com/open?id=1_SazSJmKw5UUa-85Dfx3GM-lmxTTM_Ie">
            Resume
          </a>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  </>
)

export default IndexPage
