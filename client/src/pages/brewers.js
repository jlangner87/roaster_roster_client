import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import brewerLink from '../page_assets/BREWERS.png'
const Brewers = () => {
  return (
    <div className="brewer_profile">
      <p> We are working on a user group for Brewers!</p>
      <img src={brewerLink} alt="bean link" className="placeholder_img" />
      <p>
        This is for all of you coffee shops to let the world know what you are
        brewing.
      </p>
    </div>
  )
}
export default Brewers
