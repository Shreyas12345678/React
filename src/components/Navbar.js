import React from 'react'     //rfc
import PropTypes from 'prop-types';
//import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(props) {

  
   

  
    return (  
    

      
      
        
      //  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about
 ">{props.about}</Link>
              </li>
             
            </ul>
            {/* <htmlhtmlHtmlForm className="d-flex">
              <input className="htmlForm-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
    </htmlhtmlHtmlForm>  */}
        {/*   <div className={`htmlForm-check htmlForm-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="htmlForm-check-input mx-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode} />
  <label className="htmlForm-check-label" htmlor="flexSwitchCheckDefault"
    >{props.tmode}</label
  >
  </div>    */}

  {/* added*/}
  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" id="formSwitchDefault" onClick={props.togglemode}/>
        <label className="form-check-label" htmlFor="formSwitchDefault">{props.tmode}</label>
    </div>

  {/* ended*/}
        
          </div>
        </div>
      </nav>
    )


}

Navbar.propTypes ={

   about:PropTypes.string,
   title: PropTypes.string

}

Navbar.defaultProps = {
  about:'this is about sec',
  title:"this is titile sec"
}