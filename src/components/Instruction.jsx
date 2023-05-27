import React, { useState , useEffect} from 'react'
import "./style/instruction.css"
import { BrowserRouter, Route, Routes , Link} from 'react-router-dom';
function Instruction() {
    const URL = "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1"
    const [instruction, setInstruction] = useState()
    const [ingredients, setIngredients] = useState([])
    const [spices, setSpices] = useState([])
    const [appliances, setAppliences] = useState([])
    const fetchUserData = () => {
        fetch(URL)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setInstruction(data)
                setAppliences(data.ingredients.appliances)
                setSpices(data.ingredients.spices)
                setIngredients(data.ingredients.vegetables)
            })
    }
    useEffect(() => {
        fetchUserData()
        },[])
  return (
    <div className='container_instruction'>
        <div className="back_button">
            <Link to = "/">Back</Link>
        </div>
        <div className="info_instruction">
            <div className="info_header">
                <h2>{instruction && instruction.name}</h2>
                <p>
                Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire.
                </p>
                <div className="info_duration">
                    <img src="./images/Set_time-01.svg" alt="" />
                    <p>{instruction && instruction.timeToPrepare}</p>
                </div>
                <div className="ingredients_info">
                    <h1>Ingredients</h1>
                    <div className="vegetables_info">
                        <h2>Vegetables</h2>
                        {
                            ingredients.map(vegies => (
                                <div className='vegie'>
                                    <p>{vegies.name}</p>
                                    <p>{vegies.quantity}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="spices_info">
                        <h2>Spices</h2>
                    {
                            spices.map(spices => (
                                <div className='spice'>
                                    <p>{spices.name}</p>
                                    <p>{spices.quantity}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="appliance_info">
                        <h2>Appliances</h2>
                        <div className="appl_name">  
                        {
                            appliances.map(appl => (
                                <div className="instrument">
                                    <img src="./images/Group_508.svg" alt="" />
                                    <p>{appl.name}</p>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Instruction