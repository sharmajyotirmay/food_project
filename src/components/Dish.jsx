import React from 'react'
import "./style/dish.css"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function Dish({dish}) {
  return (
    <div className="container_Dish">
        <div className="text_container_dish">
            <div className="dish_name">
                <h5>{dish.name}</h5>
                <img src="./Group_359.svg" alt="" />
                <div className="rating">
                    <p>{dish.rating}</p>
                </div>
            </div>
            <div className="dish_ingredients">
                <div className="equipments">
                    {dish.equipments.map (equip => (
                        <p>{equip}</p>
                    ))}
                </div>
                <div className="click_ingredients">
                    <h4>Ingredients</h4>
                    <Link to={"instruction"}>View list</Link>
                </div>
            </div>
            <div className="dish_discription">
                <p>{dish.description}</p>
            </div>
        </div>
        <div className="image_container_dish">
            <div className="img_dish">
                <img src={dish.image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Dish