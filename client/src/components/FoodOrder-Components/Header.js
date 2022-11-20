import React from 'react'
import '../css/DashboardCSS.css'
import { NavHashLink } from 'react-router-hash-link';


function Header() {
  return (
    <>
    {/* <div className="container-fluid" style={{width: '90%'}}>
      <nav className="navbar navbar-light justify-content-between">
        <img src="https://i.imgur.com/J7v4bWx.png" alt="logo" style={{height: "4%", width: "4%"}}/>
        <a className="navbar-brand" style={{fontSize: 25}}>The New Yorker Cafe</a>
        <form className="form-inline">
          <input className="form-control mr-sm-3" type="search" placeholder="Search for items..." aria-label="Search" />
          <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
      </div> */}
      {/* <div className="row">
        <div className="navbar-nav bg-gradient-primary sidebar col-sm-3 col-6" style={{backgroundColor: 'pink'}}>
        Category
        </div>
        <div className="col-sm-9 col-6" style={{backgroundColor: '#EEEEEE'}}>
        List
        </div>
      </div> */}


<div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light px-2 px-sm-5 container-fluid" style={{borderBottom: "2px solid blue"}}>
                <div className="container">
                <img src="https://i.ibb.co/QPrqYGh/Blue-Charcoal-Grid-Etsy-Shop-Icon-1-2.png" style={{height : '40px'}} alt="logo" />
                {/* <a className="navbar-brand px-2 px-sm-3" style={{fontSize: 23, color: 'black'}}><b>The New Yorker Cafe</b></a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mx-0 mx-sm-auto ml-3 ml-sm-1 my-1 my-sm-0">
                        {/* <li className="nav-item">
                            <NavHashLink className="nav-link smooth-scroll" to="/#main">Home</NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink className="nav-link smooth-scroll"  to="/#services">Services</NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink className="nav-link smooth-scroll" to="/#about">About Us</NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink className="nav-link smooth-scroll"  to="/#contact">Contact</NavHashLink>
                        </li> */}
                        {/* <a className="navbar-brand" style={{fontSize: 25}}>The New Yorker Cafe</a> */}
                    </ul>
                            {/* <button className="btn my-2 my-sm-0 mx-1" type="submit">Login</button> */}
                            {/* <NavHashLink  to="/login#log" className="btn my-2 my-sm-0 mx-1 smooth-scroll" type="submit">Login</NavHashLink> */}
                            {/* <button className="btn btn-red-500 my-2 my-sm-0 mx-1" style={{backgroundColor: '#FF3C6A', color: 'white'}} type="submit">Register</button> */}
                            {/* <NavHashLink  to="/register#reg" className="btn btn-red-500 my-2 my-sm-0 mx-1 smooth-scroll" style={{backgroundColor: '#FF3C6A', color: 'white'}} type="submit">Register</NavHashLink> */}
                            <form className="form-inline">
                              <input className="form-control mr-sm-3" type="search" placeholder="Search for items..." aria-label="Search" />
                              <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                            </form>
                </div>
                </div>
            </nav>
        </div>

        
    </>
  )
}

export default Header
