import { BASE_URL } from "../globals"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState } from "react"
import UpdateDeleteBean from "./UpdateBean"

const BeanProfile = () => {
  let navigate= useNavigate()
  let { beans_id } = useParams() 
  const [bean, setBean] =useState('')

useEffect(() => {
  const thisBean = async () => {
    let response = await axios.get(`${BASE_URL}/api/beans/${beans_id}`)
    setBean(response.data)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }
  thisBean()
}, [])

const goBack = () => {
  navigate(-1)
}

  return (
    <div className="baean_profile">
      <button onClick={goBack} className="back">🔙</button>
      <h1>{bean.name}</h1>
      <p>Roasted by: {bean.roaster}</p>
      <p>{bean.roast}</p>
      <p>{bean.origin}</p>
      <p>{bean.grind}</p>
      <p>{bean.description}</p>
      <p> Buy Directly from {bean.roaster}</p>
      <a href={bean.buy_link}>
        <button>Buy Now</button>
      </a>
      <p>${bean.price}</p>
      <img className="bean-img" src={bean.image} alt='product image'/><br/>
      <br></br>
      <UpdateDeleteBean/>
    </div>
  )
}

export default BeanProfile