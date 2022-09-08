import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Beans = (props) => {
  useEffect(() => {
    const listBeans = async () => {
      console.log('Beans Beans Beans!')
    }
    listBeans()
  })

  return <div className="all_beans"></div>
}

export default Beans
