import { Link } from "react-router-dom"

const Footer = () => {

  return (
    <div className="footer">
      <footer>Tiny footer. I live on the bottom of the page</footer>
      <Link to="/admin">Roaster Controls</Link>
    </div>
  )
}

export default Footer