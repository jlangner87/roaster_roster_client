import { BASE_URL } from "../globals"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState } from "react"
import UpdateDeleteBean from "./UpdateBean"
import BeanProfile from "./BeanProfile"

const RoasterProfile = () => {
  let navigate= useNavigate()
  let { roasters_id } = useParams() 
  const [roaster, setRoaster] =useState('')

useEffect(() => {
  const thisRoaster = async () => {
    let response = await axios.get(`${BASE_URL}/api/roasters/${roasters_id}`)
    setRoaster(response.data)
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
      <h1 className="roaster_name">{roaster.name}</h1>
      <p className="location">{roaster.location}</p>
      <img className="business_logo" src={roaster.logo}/>
      <p className="bean_descript">{roaster.bio}</p>
      <a href={`/beans/roaster/${roaster.id}`}>View the {roaster.name} Collection</a><br/>
      <br/>
      <a href={roaster.wesite}>
        <button>Visit Site</button>
      </a>
      </div>
      <br></br>
    </div>
  )
}

export default RoasterProfile