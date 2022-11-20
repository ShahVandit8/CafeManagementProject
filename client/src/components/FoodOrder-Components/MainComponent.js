import React from 'react'
import { useEffect, useState } from 'react'
import '../css/FoodOrder.css'
import { getCategory, getFoodItems } from '../../services/api'
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'



function MainComponent() {

    const [category, setCategory] = useState([]);
    const [foodItem, setFoodItem] = useState([])

    const getAllCategoryName = async () => {
        let allCategory = await getCategory();
        setCategory(allCategory.data);
    }

    const getAllFoodItems = async () => {
        let allFoodItems = await getFoodItems();
        setFoodItem(allFoodItems.data);
    }

    useEffect(() => {
        getAllCategoryName();
        getAllFoodItems();
    }, []);


    return (
        <>
            <div>
                {/* style={{ backgroundColor: '#FF3C6A', color: 'white'}} */}
                <main id="main">
                    <div className="container py-4 py-sm-5 mx-0 mx-sm-auto">
                        <div className="row py-4 ">
                            <div className="col-2 d-sm-none d-none d-lg-block" style={{ borderRight: "2px solid blue", color: 'black' }}>
                                <div className="d-flex mt-5">
                                    <p style={{ fontSize: 30 }}><b>Menu</b></p>

                                </div>
                                <div className="d-flex mt-1">
                                    <ul style={{ listStyleType: 'none', paddingLeft: "0", color: '#4A4A4A', fontSize: "20" }}>
                                        {
                                            category.map(category => (
                                                <>
                                                    <li className="mt-3 h5">{category.Category}</li>
                                                </>
                                            ))
                                        }
                                    </ul>
                                </div>

                            </div>
                            <div className="col-12 col-lg-10 pt-sm-0 pt-3" style={{ color: 'black' }}>
                                <div className="ml-0 ml-sm-5 mt-5">
                                    {/* <h1>Menu</h1> */}


                                    {
                                        category.map(category => (
                                            <div style={{ borderBottom: '1px solid black' }}>
                                                {/* <li className="mt-3 h5">{category.Category}</li> */}
                                                <div className="mt-5" >
                                                    <p style={{ fontSize: 28 }}><b>{category.Category}</b></p>
                                                    <br />
                                                </div>

                                                {
                                                    foodItem.map(foodItem => (
                                                        <>
                                                            <p className="mt-3 h5">{foodItem.Item_Name}</p>
                                                        </>
                                                    ))

                                                }

                                                <div className="row">
                                                    <div className="col-12 col-md-6">
                                                        <div className="border-bottom border-primary p-2">
                                                            <img src="https://i.imgur.com/UxWNRX4.png" style={{ height: 18 }} />
                                                            <br />
                                                            <p style={{ fontSize: 22, marginTop: 2 }}>Paneer Tandoori Pizza</p>
                                                            <p style={{ fontSize: 13, color: '#4A4A4A', marginTop: '-12px' }}>Paneer Tandoori Pizza with Desi Paneer Pieces</p>
                                                            <p style={{ fontSize: 19, marginTop: 1 }}>₹ 389</p>

                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <p style={{ fontSize: 15, marginTop: 1 }}>Qty :
                                                                        <select style={{ marginLeft: 10 }}>
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
                                                                    <button className="btn btn-primary float-right mr-3" style={{ width: '90px', fontSize: 13, marginTop: '-5px' }}>Add</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6 ">
                                                        <div className="border-bottom border-primary p-2">
                                                            <img src="https://i.imgur.com/UxWNRX4.png" style={{ height: 18 }} />
                                                            <br />
                                                            <p style={{ fontSize: 22, marginTop: 2 }}>Paneer Tandoori Pizza</p>
                                                            <p style={{ fontSize: 13, color: '#4A4A4A', marginTop: '-12px' }}>Paneer Tandoori Pizza with Desi Paneer Pieces</p>
                                                            <p style={{ fontSize: 19, marginTop: 1 }}>₹ 389</p>

                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <p style={{ fontSize: 15, marginTop: 1 }}>Qty :
                                                                        <select style={{ marginLeft: 10 }}>
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
                                                                    <button className="btn btn-primary float-right mr-3" style={{ width: '90px', fontSize: 13, marginTop: '-5px' }}>Add</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-12 col-md-6 mt-4">
                                                        <div className="border-bottom border-primary p-2">
                                                            <img src="https://i.imgur.com/UxWNRX4.png" style={{ height: 18 }} />
                                                            <br />
                                                            <p style={{ fontSize: 22, marginTop: 2 }}>Paneer Tandoori Pizza</p>
                                                            <p style={{ fontSize: 13, color: '#4A4A4A', marginTop: '-12px' }}>Paneer Tandoori Pizza with Desi Paneer Pieces</p>
                                                            <p style={{ fontSize: 19, marginTop: 1 }}>₹ 389</p>

                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <p style={{ fontSize: 15, marginTop: 1 }}>Qty :
                                                                        <select style={{ marginLeft: 10 }}>
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
                                                                    <button className="btn btn-primary float-right mr-3" style={{ width: '90px', fontSize: 13, marginTop: '-5px' }}>Add</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        ))
                                    }






                                    {/* <div className="row mt-4">
                                        
                                    </div> */}



                                </div>
                            </div>
                            {/* <div className="col-12 col-lg-6 my-5 pt-sm-5 d-flex align-items-center border">
                            <div className="my-5 mx-1 mr-1 border">
                                <h1 style={{ fontSize: '40px'}}>Menu</h1>
                                <div className="mx-1 mt-3 mr-1 mt-4">
                                <p className="mr-5">Foodamy POS manages all your operations efficiently so that <br/> you can focus on growing your brand, like a <b><i>real boss!.</i></b></p>
                                </div>
                                <NavHashLink to="/register#reg" className="btn mx-1 my-3" style={{backgroundColor: 'white', color: 'black'}} type="submit">Get Started</NavHashLink>
                            </div>
                        </div> */}

                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default MainComponent
