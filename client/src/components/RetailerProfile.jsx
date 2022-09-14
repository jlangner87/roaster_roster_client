import { BASE_URL } from "../globals"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

const RetailerProfile = () => {
  let navigate= useNavigate()
  let { retailer_id } = useParams() 
  const [retailer, setRetailer] =useState('')

useEffect(() => {
  const thisRoaster = async () => {
    let response = await axios.get(`${BASE_URL}/api/retailers/${retailer_id}`)
    setRetailer(response.data)
  }
  thisRoaster()
}, [])

const goBack = () => {
  navigate(-1)
}

  return (
    <div className="brewer_profile">
      <div className="bean_container">
        <button onClick={goBack} className="back">🔙</button>
        <h1>{retailer.name}</h1>
        <p>{retailer.location}</p>
        <img className="profile_image" src={retailer.logo}/><br/>
        <a className="visited" href={`/beans/retailers/${retailer.id}`}>View the {retailer.name} Collection</a><br/>
        <a href={retailer.wesite}>
          <button>Visit Site</button>
        </a>
      </div>
      <br></br>
    </div>
  )
}

export default RetailerProfile