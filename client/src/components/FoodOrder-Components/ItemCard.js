import {React, useState} from 'react'
import { useCart } from "react-use-cart"

const ItemCard = (props, handleclick) => {

    const [foodcart, setFoodCart] = useState({});
    const [qty, setQty] = useState(1);

    // const { Item_Name, Description, Unit_Price } = item;
    const { addItem } = useCart();

    // const additem = (item) => {
    //     setFoodCart({ ...foodcart, item_name: item.Item_Name})
    //     // setFoodCart({...foodcart, item: item});
    //     console.log(foodcart)
    // }

    const onValueChange = (e) => {
        setQty(e.target.value)
    }

  return (
    <>
                                    <div className="col-16 col-md-6 mt-4 pr-2 card" style={{ border: 'none'}}>
                                <div className="shadow border-bottom border-primary p-2 rounded">
                                    <img src="https://i.imgur.com/UxWNRX4.png" style={{ height: 18 }} />
                                    <br />
                                    {/* <p style={{ fontSize: 13, marginTop: 2, color: 'black' }}>Item No: {key}</p> */}
                                    <p style={{ fontSize: 22, marginTop: 2, color: 'black' }}>{props.Item_Name}</p>
                                    <p style={{ fontSize: 13, color: '#4A4A4A', marginTop: '-12px' }}>{props.Description}</p>
                                    <p style={{ fontSize: 19, marginTop: 1 }}>₹ {props.Unit_Price}</p>

                                    <div className="row">
                                        <div className="col-6">
                                            <p style={{ fontSize: 15, marginTop: 1 }}>Qty :
                                                <select style={{ marginLeft: 10 }} name="qty" onChange={(e) => onValueChange(e)}>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                </select>
                                            </p>
                                        </div>
                                        <div className="col-6">
                                            <button 
                                            className="btn btn-primary float-right mr-3" 
                                            style={{ width: '90px', fontSize: 13, marginTop: '-5px' }}
                                            // onClick={() => handleClick(this)}
                                            onClick={() => props.handleclick(props.item, qty)}
                                            > Add </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                    </>
  )
}

ItemCard.propTypes = {

}

export default ItemCard

