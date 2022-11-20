import React from 'react'
import PageHeading from '../../components/PageHeading';

function ServedOrders() {
  return (
    <>
      <div>
        <div style={{paddingLeft: 13}}>
          <PageHeading title="Served Orders" />
        </div>
        {/* <div className="mx-1 my-1 px-1 py-1">
        <Link to="/dashboard/addemployee" className="btn btn-primary">Add New Staff +</Link>
        </div> */}
        <table className="table table-striped">
        <thead>
          <tr>
          <th scope="col">Order ID</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Table No.</th>
            <th scope="col">No. of Items</th>
            <th scope="col">Order Time</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>


            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {
            emp.map(emp => (
                <tr key={emp._id}>
                    <td>{emp._id}</td>
                    <td>{emp.first_name} {emp.last_name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.phone}</td>
                    <td>{emp.empType}</td>
                    <td>{emp.gender}</td>
                    <td>{moment(emp.doj).format('DD/mm/yyyy')}</td>
                    <td>{emp.address}</td>
                    <td>
                    <Link to={`/dashboard/editemployee/${emp._id}`} className="btn btn-primary" style={{marginRight: 5}}>Edit</Link>
                    <button type="button" className="btn btn-danger" onClick={() => deleteUserDetails(emp._id)}>Delete</button>  
                    </td>
                </tr>
            ))
          } */}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default ServedOrders
