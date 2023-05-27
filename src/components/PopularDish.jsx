import React from 'react'
import "./style/populardish.css"
function PopularDish({popDish}) {
  return (
    <div className="container_pop_dishes">
        <h3>{popDish.name}</h3>
    </div>
  )
}

export default PopularDish