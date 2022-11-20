import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Context from '../Context/Context';
import MainComp from './FoodOrder-Components/Index'

function FoodOrder() {

    const { id } = useParams();

  return (
    <Context>
    <div style={{backgroundColor: 'white'}}>
      <MainComp />
      <hr />
      {/* <h2 style={{marginTop: 48, backgroundColor: 'pink'}}>Table Number: {id} </h2> */}
    </div>
    </Context>
  )
}

export default FoodOrder
