import { React, useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'
import { useNavigate, Link } from 'react-router-dom'


function Topbar() {

  const navigate = useNavigate();
  const [username, setusername] = useState("")
  const [userid, setUserId] = useState("")

  useEffect(() => {

    const token = localStorage.getItem('token')
      if (token) {
          const user = jwtDecode(token) 
          if (!user) {
              localStorage.removeItem('token')
              navigate('/')
          }else {
            const userDetails = localStorage.getItem('username');
            const userDets = JSON.parse(userDetails)
            setusername(userDets.first_name + ' ' + userDets.last_name)
            setUserId((userDets._id))
            console.log('Token matched!!!')
          }
      }
      else {
        navigate('/')
      }
    }, [])

    const logoutUser = () => {
      if (window.confirm('Are you sure you want to Logout ?')) {
        localStorage.removeItem('token');
        navigate('/login')
      } else {
        alert('User in not logout from the system')
      }
    }

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <span style={{fontSize: 20}}>Dashboard</span>
        {/* Sidebar Toggle (Topbar) */}
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars" />
        </button>
        {/* Topbar Navbar */}
        <ul className="navbar-nav ml-auto">
          {/* Nav Item - Search Dropdown (Visible Only XS) */}
          <li className="nav-item dropdown no-arrow d-sm-none">
            {/* <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-search fa-fw" />
            </a> */}
            {/* Dropdown - Messages */}
            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          {/* Nav Item - Alerts */}
          <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-bell fa-fw" />
              {/* Counter - Alerts */}
              {/* <span className="badge badge-danger badge-counter">3+</span> */}
            </a>
            {/* Dropdown - Alerts */}
           
          </li>
          {/* Nav Item - Messages */}
          <li className="nav-item dropdown no-arrow mx-1">
            
          </li>
          <div className="topbar-divider d-none d-sm-block" />
          {/* Nav Item - User Information */}
          <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">{username}</span>
              <i className="fas fa-fw fa-user-circle" />
              {/* <img className="img-profile rounded-circle" src="img/undraw_profile.svg" /> */}
            </a>
            {/* Dropdown - User Information */}
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <Link className="dropdown-item" to={`/dashboard/editemployee/${userid}`}>
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                Profile
              </Link>
              <div className="dropdown-divider" />
              <button className="dropdown-item" onClick={() => logoutUser()}>
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                Logout
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Topbar
