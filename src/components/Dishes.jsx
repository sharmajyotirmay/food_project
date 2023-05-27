import React from 'react'
import Dish from './Dish'
import "./style/dishes.css"
function Dishes({dishes}) {
  return (
    <div className="container_dishes">
      <hr style = {{height : "3px", width : "100%", border : "none", backgroundColor : "black"}}/>
        {
            dishes.map(dish => (
                <Dish dish = {dish}/>
            ))
        }
    </div>
  )
}

export default Dishes