import React, { useState, useEffect } from 'react'
import { getOrderTicket, UpdateServed } from '../../services/api'

function OrderTicket() {

    const [ticket, setTicket] = useState([]);

    useEffect(() => {
        getFoodTicket();
    }, []);

    const getFoodTicket = async () => {
        let allTicket = await getOrderTicket();
        setTicket(allTicket.data);
    }

    let myShows = ['#E86164', '#ECC44A', '#5CDE96'];

    const SetServed1 = async (id) => {
        if (window.confirm('Is order Served ?')) {
            await UpdateServed(id);
          } else {
            alert('Status of Order not updated')
          }
    }



    // const cart = ticket.cart;

    return (
        <>
            <div className="col-12 h-5">
                {/* {
                    ticket.map(item => (
                        <p> </p>
                    ))
                } */}

                {/* <div className="row">
                    <div className="card shadow mb-4 ml-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Order</h6>
                        </div>
                        <div className="card-body">

                        </div>
                    </div>
                </div> */}

                <div className="row">
                    {
                        ticket.map(item => (
                            <>
                                <div className="card shadow mb-4 ml-4" style={{ width: '280px' }}>
                                    <div className="card-header py-3" style={{ backgroundColor: myShows[Math.floor(Math.random() * myShows.length)] }}>
                                        <h6 className="m-0 font-weight-bold text-light">Order No: {item._id}</h6>
                                    </div>
                                    <div className="card-body">
                                        <h4> Table No: {item.TableId}</h4>
                                        <br />
                                        <div>
                                            <table className="table">
                                                {
                                                    item.cart.map(c => (
                                                        <>
                                                            <tr>
                                                                <td><h6>{c.name}</h6></td>
                                                                <td><h6>{c.qty}</h6></td>
                                                            </tr>
                                                        </>
                                                    ))
                                                }
                                            </table>
                                        </div>

                                    </div>
                                    <div className="mx-auto m-4">

                                        {/* <button className="btn btn-success mx-1" onClick={() => SetServed(item._id)}>Preparing</button> */}
                                        <button className="btn btn-primary mx-1" onClick={() => SetServed1(item._id)}>Mark as Served</button>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>

            </div>

            <div className="col-12" style={{ backgroundColor: "yellow" }}>

            </div>
        </>
    )
}

export default OrderTicket
