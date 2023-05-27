import React, { useEffect, useState } from 'react'
import CurrentTime from './CurrentTime'
import Cuisine from './Cuisine'
import PopularDishes from './PopularDishes'
import Dishes from './Dishes'
import Instruction from './Instruction'
function SelectDishes() {
    const today = new Date()
    const [date, setDate] = useState(today)
    const URL = "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"

    const [dishes, setDishes] = useState([])
    const [populardishes, setPopulardishes] = useState([])

    const fetchUserData = () => {
        fetch(URL)
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data.popularDishes)
                setDishes(data.dishes)
                setPopulardishes(data.popularDishes)
            })
    }
    useEffect(() => {
        fetchUserData()
        var timer = setInterval(() => setDate(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer)
        }
    },[])
  
    return (
    <>
        <CurrentTime date = {date}/>
        <Cuisine/>
        <PopularDishes populardishes = {populardishes}/>
        {dishes && <Dishes dishes = {dishes}/>}
    </>
  )
}

export default SelectDishes