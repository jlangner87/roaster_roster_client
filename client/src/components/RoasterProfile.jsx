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
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 400
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
      <h1>{roaster.name}</h1>
      <p>{roaster.location}</p>
      <img className="profile_image" src={roaster.logo}/>
      <p className="bean_description">{roaster.bio}</p>
      <a href={`/beans/roaster/${roaster.id}`}><p>View the {roaster.name} Collection</p></a>
      <a href={roaster.wesite}>
        <button>Visit Site</button>
      </a>
      </div>
      <br></br>
    </div>
  )
}

export default RoasterProfile