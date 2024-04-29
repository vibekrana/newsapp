import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    let { title } = this.props;
    return (
      <>
        <header style={{
          textAlign: 'center', fontFamily: "Garamond", position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100, height: "90px", backgroundColor: 'rgb(0, 34, 77)', color: 'rgb(255, 32, 78)', padding: '20px 0px'
        }}>
          <h1>
            {title}
          </h1>
        </header>
        <div>
          <nav className="navbar navbar-expand-lg bg-body-white" style={{
            backgroundColor: 'rgb(0, 34, 77)',
            position: 'fixed',
            top: 68,
            left: 0,
            width: '100%',
            zIndex: 100,
            height: "0px",
            // backgroundColor: '#fff',
            // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}>
            <div className="container-fluid">
              <Link className="navbar-brand" to="/" style={{ color: 'rgb(255, 32, 78)' }}>{title}</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                  </li>
                  {/* <li className="nav-item">  <a className="nav-link" to="/about">About</a></li> */}
                  <li className="nav-item">  <Link className="nav-link" to="/general" style={{ color: 'rgb(248, 246, 227)' }}>General</Link></li>
                  <li className="nav-item">  <Link className="nav-link" to="/business" style={{ color: 'rgb(248, 246, 227)' }}>Business</Link></li>
                  <li className="nav-item">  <Link className="nav-link" to="/entertainment" style={{ color: 'rgb(248, 246, 227)' }}>Entertainment</Link></li>
                  <li className="nav-item">  <Link className="nav-link" to="/health" style={{ color: 'rgb(248, 246, 227)' }}>Health</Link></li>
                  <li className="nav-item">  <Link className="nav-link" to="/science" style={{ color: 'rgb(248, 246, 227)' }}>Science</Link></li>
                  <li className="nav-item">  <Link className="nav-link" to="/sports" style={{ color: 'rgb(248, 246, 227)' }}>Sports</Link></li>
                  <li className="nav-item">  <Link className="nav-link" to="/technology" style={{ color: 'rgb(248, 246, 227)' }}>Technology</Link></li>
                  <Link className="nav-link" aria-current="page" to="/about" style={{ color: 'rgb(248, 246, 227)' }}>About</Link>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    )
  }
}
