import React, { useState } from 'react'
import { placeFoodOrder } from '../../services/api'
import { useNavigate, useParams } from 'react-router-dom'


const CustomerOrder = ({ fooditem }) => {

    const { id } = useParams();
    // const [ foodcart, setFoodcart ] = useState(fooditem)
    const [ cart, setCart ] = useState({})
    const [ customer, setCustomer ] = useState({
        name: '',
        phone: 0,
    })
    const navigate = useNavigate();

    const onValueChange = (e) => {
        setCustomer({ ...customer, [e.target.name] : e.target.value})
    }

    var totalprice = 0;

    const placeOrder = () => {
        fooditem.map(item =>{
            totalprice = totalprice+item.wholeprice;
        })
        setCart({ Customer: customer, cart: fooditem, time: Date().toString(), status: "new", totalamount: totalprice});
        console.log(cart)

    }

    const placeOrderFood = async () => {

        fooditem.map(item =>{
            totalprice = totalprice+item.wholeprice;
        })

        setCart({ Customer: customer, cart: fooditem, time: Date().toString(), status: "new", totalamount: totalprice});
        console.log(cart)
        const order = await placeFoodOrder(cart, id);

        if(order){
          alert('Food Order Placed Successfully')
          navigate('/')
        }
        else(
          alert("Sorry Food Order is not placed")
        )
    
    }

  return (
    <>
      {/* <div>
        Name: <input type="text" name="customername"/>
        Phone: <input type="text" name="phone" />
        <button onClick={() => placeOrder()}> Place Order</button>
      </div> */}

      <div className="row mx-1">
          <div className="col-lg-7">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <div id="contact-form" role="form">
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_name">Customer Name</label>
                            <input id="form_name" type="text" name="name" className="form-control" required data-error="Name is required." onChange={(e) => onValueChange(e)} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="form_message">Phone Number</label>
                            <input id="form_name" type="text" name="phone" className="form-control" required data-error="Phone number is required." onChange={(e) => onValueChange(e)} />
                          </div>
                        </div>
                        <div className="col-md-12">
                        <button type="submit" className="btn btn-primary pt-2 btn-block" style={{color: 'white'}} onClick={() => placeOrder()}>Confirm Order</button>
                          <button type="submit" className="btn btn-primary pt-2 btn-block" style={{color: 'white'}} onClick={() => placeOrderFood()}>Place Order</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default CustomerOrder
