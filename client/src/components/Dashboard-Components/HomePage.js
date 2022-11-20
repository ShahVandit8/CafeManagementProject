import React, { Component, useEffect, useState } from 'react';
import { getTotalNoCategory, getFoodItemCount, getTableCount, getStaffCount, getOrderTicket, getTotalOrder } from '../../services/api'
import PageHeading from '../../components/PageHeading';
import { Link } from 'react-router-dom';

function HomePage() {

  const [neworder, setNowOrder] = useState(0)
  const [servedorder, setServedOrder] = useState(0)
  const [totalorder, setTotalOrder] = useState(0)
  const [revenue, setRevenue] = useState(0)
  const [totalCategory, setTotalCategory] = useState(0);
  const [fooditem, setFoodItem] = useState(0);
  const [totalTable, setTotalTable] = useState(0);
  const [totalstaff, setTotalStaff] = useState(0);

  useEffect(() => {
    getTotalCategory();
    getTotalMenuItem();
    getTotalTableCount();
    getTotalStaffCount();
    getNewOrderCount();
    getTotalOrderCount();
  }, []);

  const getNewOrderCount = async () => {
    let neworders = await getOrderTicket();
    setNowOrder(Number(neworders.data.length));
  }

  const getTotalOrderCount = async () => {
    let totalorders = await getTotalOrder();
    setTotalOrder(Number(totalorders.data.length));
  }

  const getTotalCategory = async () => {
    let allCategory = await getTotalNoCategory();
    setTotalCategory(Number(allCategory.data))
  }

  const getTotalMenuItem = async () => {
    let allFoodItems = await getFoodItemCount();
    setFoodItem(allFoodItems.data);

  }

  const getTotalTableCount = async () => {
    let allTables = await getTableCount();
    setTotalTable(allTables.data);
  }

  const getTotalStaffCount = async () => {
    let allEmp = await getStaffCount();
    setTotalStaff(allEmp.data);
  }

  return (
    <div>
      <div className="container-fluid">

        {/* <!-- Page Heading --> */}
        <div style={{ paddingLeft: 13 }}>
          <PageHeading title="Home" />
        </div>
        {/* <!-- Content Row --> */}

        <div className="row">

          {/* card 1 */}
          <Link className="col-xl-3 col-md-6 mb-4" to="/dashboard/neworders" style={{ textDecoration: 'none' }}>
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Pending Orders</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{neworder}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-clock fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* card 2 */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Served Orders</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{servedorder}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-check fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <Link className="col-xl-3 col-md-6 mb-4" to="/dashboard/totalorders" style={{ textDecoration: 'none' }}>
            <div className="card border-left-info shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Total Orders</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{totalorder}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-clipboard fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* card 4 */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Total Earnings</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">₹ {revenue}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div className="row">


          {/* card 5 */}
          <Link className="col-xl-3 col-md-6 mb-4" to="/dashboard/fooditemcategory" style={{ textDecoration: 'none' }}>
            <div className="card border-left-dark shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-dark text-uppercase mb-1">Total Category</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{totalCategory}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-shopping-bag fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* card 6 */}
          <Link className="col-xl-3 col-md-6 mb-4" to="/dashboard/fooditemmenu" style={{ textDecoration: 'none' }}>
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Total Menu Item</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{fooditem}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-shopping-cart fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* card 7 */}
          <Link className="col-xl-3 col-md-6 mb-4" to="/dashboard/tablemanagement" style={{ textDecoration: 'none' }}>
            <div className="card border-left-secondary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-secondary text-uppercase mb-1">Total Table</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{totalTable}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-qrcode fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* card 8 */}
          <Link className="col-xl-3 col-md-6 mb-4" to="/dashboard/employee" style={{ textDecoration: 'none' }}>
            <div className="card border-left-danger shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">Total Staff</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{totalstaff}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-user-circle fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Bar Charts</h6>
            </div>
            <div className="card-body">
            
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage
