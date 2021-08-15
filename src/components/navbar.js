import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useEffect } from "react"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = ({ siteTitle }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">{siteTitle}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar"
                aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <ExactNavLink
                to="/all"
              >
                関口存男文例集コピー総目次
              </ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink
                to="/sekiguchi"
              >
                関口存男とは
              </ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink
                to="/about"
              >
                このサイトについて
              </ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink
                to="/toiawase"
              >
                お問い合わせ
              </ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink
                to="/link"
              >
                Link
              </ExactNavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
