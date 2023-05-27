import React from 'react'
import PopularDish from './PopularDish'
import "./style/populardish.css"
function PopularDishes({populardishes}) {

  return (
    <div className="container_popular_dishes">
        <div className="heading_popular_dishes">
            <h2>Popular Dishes</h2>
        </div>
        <div className="pop_dishes">
            {
                populardishes.map(popDish => (
                    <PopularDish popDish = {popDish}/>
                ))
            }
        </div>
    </div>
  )
}

export default PopularDishes