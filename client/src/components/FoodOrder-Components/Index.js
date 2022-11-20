import Header from './Header'
import MainMenu from './MainMenu'

import {React, useState} from 'react'

const Index = () => {

  // const [foodcart, setFoodCart] = useState([]);


//   const additem = (item, quantity) => {
//     setFoodCart({...foodcart, [item._id] : {name: item.Item_Name, qty : quantity, unitprice: item.Unit_Price, wholeprice: item.Unit_Price*quantity} })
//     // setFoodCart({...foodcart, item: item});
//     console.log(foodcart)
// }

// const additem = (item, quantity) => {
//   setFoodCart([ ...foodcart,  {[item._id] : {name: item.Item_Name, qty : quantity, unitprice: item.Unit_Price, wholeprice: item.Unit_Price*quantity} }])
//   // setFoodCart({...foodcart, item: item});
//   console.log(foodcart)
// }

  return (
    <>
    <Header />
    <MainMenu/>
    {/* <Cart cartitem={foodcart} /> */}
    </>
  )
}

export default Index



