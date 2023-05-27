import React from 'react'
import Single_cuisine from './Single_cuisine'
import "./style/cuisine.css"

function Cuisine() {
    const diff_cuisine = ['Indian', 'Italian', 'Chinese', 'Japanese', 'Maxican']
  return (
    <div className="container_cuisine">
        {diff_cuisine.map(cuisine => (
            <Single_cuisine cuisine = {cuisine}/>
        ))}
    </div>
  )
}

export default Cuisine