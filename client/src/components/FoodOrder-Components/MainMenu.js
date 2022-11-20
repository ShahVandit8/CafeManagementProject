import React from 'react'
import { useEffect, useState } from 'react'
import '../css/FoodOrder.css'
import { getCategory, getFoodItems } from '../../services/api'
import ItemCard from '../FoodOrder-Components/ItemCard'
import CustomerOrder from './CustomerOrder'

const MainMenu = () => {


    const [category, setCategory] = useState([]);
    const [foodItem, setFoodItem] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    const [foodcart, setFoodCart] = useState([]);
    

    const handleClick = (item) => {
        console.log(item)
    }

    // const addItem = (foodItem, quantity) => {
    //     // console.log(foodItem)
    //     // console.log(qty)
    //     setCart()
    //     console.log(cart)
    // }

    // const additem = (item) => {
    //     setFoodCart({ ...foodcart,  [item._id] : {name: item.Item_Name, qty : 1, price: item.Unit_Price} })
    //     // setFoodCart({...foodcart, item: item});
    //     console.log(foodcart)
    // }

    // const additem = (item, quantity) => {
    //     setFoodCart({ ...foodcart, [item._id]: { name: item.Item_Name, qty: quantity, unitprice: item.Unit_Price, wholeprice: item.Unit_Price * quantity } })
    //     // setFoodCart({...foodcart, item: item});
    //     console.log(foodcart)
    // }

    const additem = (item, quantity) => {
        setFoodCart([...foodcart, {id: item._id, name: item.Item_Name, qty: quantity, unitprice: item.Unit_Price, wholeprice: item.Unit_Price * quantity } ])
        // setFoodCart({...foodcart, item: item});
    }
    const onValueChange = (e) => {
        setQuantity(e.target.value)
        console.log(quantity)
    }

    const getAllCategoryName = async () => {
        let allCategory = await getCategory();
        setCategory(allCategory.data);
    }

    const getAllFoodItems = async () => {
        let allFoodItems = await getFoodItems();
        console.log(allFoodItems.data)
        // let allFoodItems1 = allFoodItems.data;
        // allFoodItems1.map(item => {
        //     item.id = item._id
        // })
        // console.log(allFoodItems1)

        setFoodItem(allFoodItems.data);

    }

    useEffect(() => {

        getAllCategoryName();
        getAllFoodItems();
    }, []);

    // const foodlistcart = foodcart.map((item, index) => (
    //     <>
    //     <p key={index}>{item.Item_Name}</p>
    //     </>
    // ))

    return (
        <>
        <div>
            <div>
                {/* style={{ backgroundColor: '#FF3C6A', color: 'white'}} */}
                <main id="main">
                    <div className="container py-4 py-sm-5 mx-0 mx-sm-auto">

                        <div className="d-flex mt-5">
                            <p style={{ fontSize: 30 }}><b>Menu</b></p>

                        </div>


                        <div className="row">

                            {
                                foodItem.map((item, index) => (
                                    <ItemCard key={index} foodcart={foodcart} setFoodCart={setFoodCart} item={item} Item_Name={item.Item_Name} Description={item.Description} Unit_Price={item.Unit_Price} handleclick={additem} />
                                ))
                            }


                        </div>
                    </div>
                </main>
            </div>
            <div>
 
                <h2 className="text-center mt-3">Customer Details</h2>

        </div>
            <div className=''>
                { foodcart.length >= 0 && (
                    <p>Name | Quantity | Price</p>
                )}
                {
                    foodcart.map(item => (
                        <>
                           <p className='mb-0'>{item.name} | {item.qty} | {item.wholeprice}</p>
                        </>
                    ))
                }
            </div>
                <CustomerOrder fooditem={foodcart} />
            </div>
        </>
    )
}

export default MainMenu
