import React, {useState, useEffect} from 'react'
import PageHeading from '../../components/PageHeading';
import { getOrderTicket } from '../../services/api';
import moment from 'moment';

function NewOrder() {

  const [order, setOrder] = useState([]);

    useEffect(() => {
      geNewOrderDetails();
    }, []);

    const geNewOrderDetails = async () => {
        let allNewOrder = await getOrderTicket();
        setOrder(allNewOrder.data);
    }

  return (
    <>
      <div>
        <div style={{paddingLeft: 13}}>
          <PageHeading title="New Orders" />
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
            <th scope="col">Order Date</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>


            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            order.map(item => (
                <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.Customer.name}</td>
                    <td>{item.TableId}</td>
                    <td>{item.cart.length}</td>
                    <td>{moment(item.time).format('hh:mm:ss a')}</td>
                    <td>{moment(item.time).format('DD/mm/yyyy')}</td>
                    <td>{item.Customer.phone}</td>
                    <td>₹ {item.totalamount}</td>
                    <td>{item.status}</td>
                    <td>
                    {/* <Link to={`/dashboard/editemployee/${emp._id}`} className="btn btn-primary" style={{marginRight: 5}}>Edit</Link> */}
                    {/* <button type="button" className="btn btn-danger" onClick={() => deleteUserDetails(emp._id)}>Delete</button>   */}
                    </td>
                </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default NewOrder
