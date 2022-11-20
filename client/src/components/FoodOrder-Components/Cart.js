import { React, useState, useEffect } from 'react'

const Cart = ({ cartitem }) => {

  // const [cartfood, setCart] = useState()
  // setCart(cartitem)

  // useEffect(() => {
  //   setCart(cartitem)
  // }, []);


  return (
    <>
      <h1 className="text-center mt-3">Cart</h1>
      {
        cartitem.map(item => (
          <>
          <p>{item._id}</p>
          </>
        ))
      }
    </>
  )
}

export default Cart
