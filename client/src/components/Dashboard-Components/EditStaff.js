import {React, useState, useEffect } from 'react'
import '../css/registration.css'
import { editUser, getEditEmp } from '../../services/api.js'
import { useParams, useNavigate } from 'react-router-dom'
import PageHeading from '../../components/PageHeading';


function EditStaff() {

    const defaultValue = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        empType: "",
        gender: "",
        doj: "",
        address: "",
        zip: "",
        city: "",
        phone: "",
    }

    const [user, setUser] = useState(defaultValue);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() =>{
        loadEmpDetails();
    }, [])

    const loadEmpDetails = async () =>{
        const response = await getEditEmp(id);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value})
        console.log(user)
    }   

    const editUserDetails = async () => {
      
        const useradded = await editUser(user, id);

        if(useradded){
          alert('Employee Details Edited Successfully')
          navigate(-1)
        }
        else(
          alert("Edit Unsuccessful")
        )
    }



  return (
    <>
    <div style={{paddingLeft: 13}}>
          <PageHeading title="Edit Staff Details" />
        </div>
    <div className="mx-1 my-1 px-1 py-1">
        <button class="btn btn-primary mx-2" onClick={() => navigate(-1)}> 	&larr; Back</button>
    </div>
    
    <div id="reg">
    <div className="page-content" style={{backgroundColor: '#F8F9FC'}}>
  <div className="form-v10-content">
    <div className="form-detail">
      <div className="form-left">
        <h2>Employee Information</h2>
        <div className="form-group">
          <div className="form-row form-row-1">
            <input
              type="text"
              id="first_name"
              className="input-text"
              name="first_name"
              placeholder="First Name"
              required
              onChange={(e) => onValueChange(e)}
              value={user.first_name}
            />
          </div>
          <div className="form-row form-row-2">
            <input
              type="text"
              id="last_name"
              name="last_name"
              className="input-text"
              placeholder="Last Name"
              required
              onChange={(e) => onValueChange(e)}
              value={user.last_name}
            />
          </div>
        </div>
        <div className="form-row">
          <input
            type="text"
            id="your_email"
            name="email"
            className="input-text"
            required
            pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
            placeholder="Your Email"
            onChange={(e) => onValueChange(e)}
            value={user.email}
          />
        </div>
        <div className="form-row">
          <input
            type="password"
            className="company"
            name="password"
            id="company"
            placeholder="Password"
            required
            onChange={(e) => onValueChange(e)}
            value={user.password}
          />
        </div>
          <div className="form-row">
            <select name="empType"  onChange={(e) => onValueChange(e)} required value={user.empType}>
              <option value="select" selected>Select Employee Type</option>
              <option value="manager">Manager</option>
              <option value="chef">Chef</option>
              <option value="headchef">Head Chef</option>
              <option value="waiter">Waiter</option>
              <option value="cleaingStaff">Cleaning Staf</option>
            </select>
          </div>
      </div>
      <div className="form-right">
        <h2>Contact Details</h2>
        <div className="form-row">
          <select
           name="gender" 
           onChange={(e) => onValueChange(e)} 
           required value={user.gender}>
            <option className="option" value="select">
              Gender
            </option>
            <option className="option" value="male">
              Male
            </option>
            <option className="option" value="female">
              Female
            </option>
            <option className="option" value="other">
              Other
            </option>
          </select>
          <span className="select-btn">
            <i className="zmdi zmdi-chevron-down" />
          </span>
        </div>
        <div className="form-row">
        <input
            type="date"
            className="company"
            name="doj"
            id="doj"
            placeholder="Date of Joining"
            required
            onChange={(e) => onValueChange(e)}
            value={user.doj}
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            className="street"
            name="address"
            id="street"
            placeholder="Address"
            required
            onChange={(e) => onValueChange(e)}
            value={user.address}
          />
        </div>
        <div className="form-group">
          <div className="form-row form-row-1">
            <input
              type="text"
              className="zip"
              name="zip"
              id="zip"
              placeholder="Zip Code"
              required
              onChange={(e) => onValueChange(e)}
              value={user.zip}
            />
          </div>
          <div className="form-row form-row-2">
          <input
              type="text"
              className="zip"
              id="city"
              name="city"
              placeholder="City"
              required
              onChange={(e) => onValueChange(e)}
              value={user.city}
            />
          </div>
        </div>
          <div className="form-row">
            <input
              type="text"
              className="phone"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={(e) => onValueChange(e)}
              value={user.phone}
            />
          </div>
        <div className="form-checkbox">
          <label className="container">
            <p className="mt-1">
              I do accept the{" "}
              <a href="/" className="text">
                Terms and Conditions
              </a>{" "}
              of your site.
            </p>
            <input type="checkbox" className="mt-2" required/>
            <span className="checkmark mt-2"/>
          </label>
        </div>
        <div className="form-row-last">
          <input
            type="submit"
            className="register"
            style={{height: '50px'}}
            value="Edit Employee"
            onClick={() => editUserDetails()}
          />
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
    </>
  )
}

export default EditStaff
