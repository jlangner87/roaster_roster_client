import { BASE_URL } from "../globals"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Collections = () => {

  return (
    <div className="collection_bar">
    <h1>Browse Bean Collections</h1>
    <ul>
      <li class="dropdown">
        <a href="javascript:void(0)" class="dropdown_link">
          Origin
        </a>
        <div class="dropdown-content">
          <a href="/beans/origin/Brazil">Brazil</a>
          <a href="/beans/origin/Colombia">Colombia</a>
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
      <li class="dropdown">
        <a href="javascript:void(0)" class="dropdown_link">
          Roast
        </a>
        <div class="dropdown-content">
          <a href="/roast/Espresso">Espresso Roast</a>
          <a href="/roast/Dark">Dark Roast</a>
          <a href="/roast/Medium">Medium Roast</a>
          <a href="/roast/Light">Light Roast</a>
          <a href="/roast/Blonde">Blonde Roast</a>
          <a href="/roast/Other">Other</a>
        </div>
      </li>
      <li class="dropdown">
        <a href="javascript:void(0)" class="dropdown_link">
          Grind
        </a>
        <div class="dropdown-content">
          <a href="/grind/Wholebean">Whole Bean</a>
          <a href="/grind/Coarse">Coarse Grind</a>
          <a href="/grind/Fine">Fine Grind</a>
        </div>
      </li>
      <li class="dropdown">
        <a href="javascript:void(0)" class="dropdown_link">
          Misc
        </a>
        <div class="dropdown-content">
          <a href="/">Organic</a>
          <a href="/">Decaf</a>
          <a href="/">Fair Trade</a>
          <a href="/">Non-Profit</a>
        </div>
      </li>
      <li class="dropdown">
        <a href="javascript:void(0)" class="dropdown_link">
          By Roaster
        </a>
        <div class="dropdown-content">
          <a href="/beans/roaster/1">Stone Street</a>
          <a href="/beans/roaster/2">Coffea Roasterie</a>
          <a href="/beans/roaster/3">Fire Department Coffee</a>
          <a href="/beans/roaster/4">Dark Matter Coffee</a>
          <a href="/beans/roaster/5">Scout Finch</a>
          <a href="/beans/roaster/6">Stone Bru</a>
        </div>
      </li>
      <li class="dropdown">
        <a href="javascript:void(0)" class="dropdown_link">
          By Retailer
        </a>
        <div class="dropdown-content">
          <a href="/">Medlar Coffee Co</a>
          <a href="/">Poima Studio</a>
          <a href="/">Pressed</a>
          <a href="/">Carrol's Bakery</a>
        </div>
      </li>
    </ul>
  </div>
  )
}

export default Collections