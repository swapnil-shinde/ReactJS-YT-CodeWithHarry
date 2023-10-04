import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg`} style={{backgroundColor: props.mode === 'dark'?'#262833':'#e5e5e5', color: props.mode === 'dark'?'white':'black'}}>
      <div className="container-fluid">
        {/* Commenting the Router Login due to Hosting on GitHub */}
        <Link className="navbar-brand" to="/" style={{backgroundColor: props.mode === 'dark'?'#262833':'#e5e5e5', color: props.mode === 'dark'?'white':'black'}}>{props.title}</Link>
        {/* <a className="navbar-brand" href="/#" style={{backgroundColor: props.mode === 'dark'?'#262833':'#e5e5e5', color: props.mode === 'dark'?'white':'black'}}>{props.title}</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* Commenting the Router Login due to Hosting on GitHub */}
              <Link className="nav-link active" aria-current="page" to="/" style={{backgroundColor: props.mode === 'dark'?'#262833':'#e5e5e5', color: props.mode === 'dark'?'white':'black'}}>Home</Link>
              {/* <a className="nav-link active" aria-current="page" href="#" style={{backgroundColor: props.mode === 'dark'?'#262833':'#e5e5e5', color: props.mode === 'dark'?'white':'black'}}>Home</a> */}
            </li>
            <li className="nav-item">
              {/* Commenting the Router Login due to Hosting on GitHub */}
              <Link className="nav-link" to="/about" style={{backgroundColor: props.mode === 'dark'?'#262833':'#e5e5e5', color: props.mode === 'dark'?'white':'black'}}>About</Link>
              {/* <a className="nav-link" href="#" style={{backgroundColor: props.mode === 'dark'?'#262833':'#e5e5e5', color: props.mode === 'dark'?'white':'black'}}>About</a> */}
            </li>
          </ul>
          {/* Commenting Search Option */}
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <div className={`form-check form-switch`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Please set title here...'
}
