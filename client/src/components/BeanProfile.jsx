import { BASE_URL } from "../globals"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState } from "react"

const BeanProfile = () => {

  const [profileState, setProfileState] =useState('')

useEffect(() => {
  const thisBean = async () => {
    let response = await axios.get(`${BASE_URL}/api/beans/5}`)
    console.log(response.data)
    setProfileState(response.data)
  }
  thisBean()
}, [])

  return (
    <div className="baean_profile">
      <h1></h1>
    </div>
  )
}

export default BeanProfile