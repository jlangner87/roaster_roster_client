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
          <a href="/">Brazil</a>
          <a href="/">Colombia</a>
          <a href="/">Guatemala</a>
          <a href="/">Hawaii</a>
          <a href="/">India</a>
          <a href="/">Kenya</a>
          <a href="/">Mexico</a>
          <a href="/">Niceragua</a>
          <a href="/">Peru</a>
          <a href="/">Sumatra</a>
          <a href="/">Tanzania</a>
          <a href="/">Yamen</a>
          <a href="/">Other</a>
        </div>
      </li>
      <li class="dropdown">
        <a href="javascript:void(0)" class="dropdown_link">
          Roast
        </a>
        <div class="dropdown-content">
          <a href="/">Espresso Roast</a>
          <a href="/">Dark Roast</a>
          <a href="/">Medium Roast</a>
          <a href="/">Light Roast</a>
          <a href="/">Blonde Roast</a>
          <a href="/">Other</a>
        </div>
      </li>
      <li class="dropdown">
        <a href="javascript:void(0)" class="dropdown_link">
          Grind
        </a>
        <div class="dropdown-content">
          <a href="/">Whole Bean</a>
          <a href="/">Coarse Grind</a>
          <a href="/">Fine Grind</a>
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