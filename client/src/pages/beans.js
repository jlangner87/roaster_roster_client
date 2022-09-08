import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Beans = (props) => {
  useEffect(() => {
    const listBeans = async () => {
      // let res = await axios.get(`${BASE_URL}/api/beans/:bean_id`)
      // console.log(res.data)
    }
    listBeans()
  })

  return <div className="all_beans"></div>
}

export default Beans
