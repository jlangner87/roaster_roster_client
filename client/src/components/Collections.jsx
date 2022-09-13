import { BASE_URL } from "../globals"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from "react-router-dom"

const Collections = () => {

  return (
    <div className="collection_bar">
    <h3 className="collection_header">Browse Bean Collections</h3>
    <ul>
      <li className="dropdown">
        <a href="javascript:void(0)" className="dropdown_link">
          Origin
        </a>
        <div className="dropdown-content">
          <a href="/beans/origin/Brazil">Brazil</a>
          <a href="/beans/origin/Colombia">Colombia</a>
          <a href="/beans/origin/Etheopia">Etheopia</a>
          <a href="/beans/origin/Guatemala">Guatemala</a>
          <a href="/beans/origin/Hawaii">Hawaii</a>
          <a href="/beans/origin/India">India</a>
          <a href="/beans/origin/Indonesia">Indonesia</a>
          <a href="/beans/origin/Kenya">Kenya</a>
          <a href="/beans/origin/Mexico">Mexico</a>
          <a href="/beans/origin/Nicaragua">Nicaragua</a>
          <a href="/beans/origin/Peru">Peru</a>
          <a href="/beans/origin/Sumatra">Sumatra</a>
          <a href="/beans/origin/Tanzania">Tanzania</a>
          <a href="/beans/origin/Yamen">Yamen</a>
          <a href="/beans/origin/Other">Other</a>
        </div>
      </li>
      <li className="dropdown">
        <a href="javascript:void(0)" className="dropdown_link">
          Roast
        </a>
        <div className="dropdown-content">
          <a href="/roast/Espresso">Espresso Roast</a>
          <a href="/roast/Dark">Dark Roast</a>
          <a href="/roast/Medium">Medium Roast</a>
          <a href="/roast/Light">Light Roast</a>
          <a href="/roast/Blonde">Blonde Roast</a>
          <a href="/roast/Other">Other</a>
        </div>
      </li>
      <li className="dropdown">
        <a href="javascript:void(0)" className="dropdown_link">
          Grind
        </a>
        <div className="dropdown-content">
          <a href="/grind/Wholebean">Whole Bean</a>
          <a href="/grind/Coarse">Coarse Grind</a>
          <a href="/grind/Fine">Fine Grind</a>
        </div>
      </li>
      <li className="dropdown">
        <a href="javascript:void(0)" className="dropdown_link">
          Misc
        </a>
        <div className="dropdown-content">
          <a href="/collections/Organic">Organic</a>
          <a href="/price/low">Under $15</a>
          <a href="/">Decaf</a>
          <a href="/">Fair Trade</a>
          <a href="/">Non-Profit</a>
          <a href="/">Veteran Owned</a>
          <a href="/">Good Cause</a>
          <a href="/">Sustainable</a>
  
        </div>
      </li>
    </ul>
  </div>
  )
}

export default Collections