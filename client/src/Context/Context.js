import { React , createContext, useState, useEffect, useReducer, useContext } from 'react'
import { getFoodItems } from '../services/api'
import { cartReducer } from './Reducers';

const Cart = createContext();

const Context = ({ children }) => {

    const [foodItem, setFoodItem] = useState([]);


    const getAllFoodItems = async () => {
        let allFoodItems = await getFoodItems();
        console.log(allFoodItems.data);
        setFoodItem(allFoodItems.data);

    }

    useEffect(() => {
        getAllFoodItems();
    }, []);

    const product = foodItem.map((item) => ({
        _id: item._id,
        name: item.Item_Name,
        category: item.Category,
        description: item.Description,
        quantity: item.Quantity,
        price: item.Unit_Price
    }));

    const [state, disptch] = useReducer(cartReducer, {
        products: product,
        cart:[]
    })


  return (
    <Cart.Provider value={{ state, disptch }}>
      {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState = () => {
    return useContext(Cart)
}