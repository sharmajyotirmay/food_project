import React from 'react'
import "./style/single_cuisine.css"
function Single_cuisine({cuisine}) {
  return (
    <div className="all_cuisine">
                {cuisine}
            </div>
  )
}

export default Single_cuisine