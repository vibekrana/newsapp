import React, { Component } from 'react'
// import './Newsitem.css';

export default class Newsitm extends Component {
  render() {
    let {title, content, url, newsUrl, author, date, source} = this.props
    return (
        <>
      <div>
        <div className="card text-center" style={{
    width: "18rem",
    transition: "all 0.3s",
    transform: "scale(1.0)",
    cursor: "pointer",
    // Here is the hover effect
    ":hover": {
      transform: "scale(1.05)",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
    }
  }}>
        <a rel="noreferrer" href={newsUrl} target = "_blank">
  <img src={!url?"https:cdn.ndtv.com/common/images/ogndtv.png":url} className="card-img-top" alt="..."/></a>
  <div className="card-body"> 
  <a rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} href={newsUrl} target = "_blank">
    <h5 className="card-title">{title}</h5> <span class="badge text-bg-danger">{source}</span> 
    <p className="card-text">{content}</p>
    </a>
    <p className="card-text"><small className="text-body-secondary">By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target = "_blank" className="btn btn-dark">Click for more details</a>
  </div>
  </div>
      </div>
      </>
    )
  }
}
