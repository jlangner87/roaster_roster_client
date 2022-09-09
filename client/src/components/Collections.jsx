const Collections = () => {

  return (
    <div className="collection_bar">
    <h1>Browse Collections</h1>
    <ul>
      <li class="dropdown">
        <a href="javascript:void(0)" class="dropdown_link">
          Origin
        </a>
        <div class="dropdown-content">
          <a href="/">Nicaragua</a>
          <a href="/">Guatemala</a>
          <a href="/">Mexico</a>
          <a href="/">Brazil</a>
          <a href="/">Colombia</a>
          <a href="/">Sumatra</a>
          <a href="/">Etheopia</a>
          <a href="/">Kenya</a>
          <a href="/">Hawaii</a>
          <a href="/">Peru</a>
          <a href="/">Tanzania</a>
          <a href="/">Yamen</a>
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
          Organic
        </a>
        <div class="dropdown-content">
          <a href="/">Organic</a>
        </div>
      </li>
      <li class="dropdown">
        <a href="javascript:void(0)" class="dropdown_link">
          By Roaster
        </a>
        <div class="dropdown-content">
          <a href="/">Stone Street</a>
          <a href="/">Coffea Roasterie</a>
          <a href="/">Fire Department Coffee</a>
          <a href="/">Dark Matter Coffee</a>
          <a href="/">Scout Finch</a>
          <a href="/"></a>
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