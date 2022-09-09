import { Link } from "react-router-dom"

const Footer = () => {

  return (
    <div className="footer">
      <footer>©2022 Joshua M. Langner</footer>
      <Link to="/admin">Roaster Controls</Link>
    </div>
  )
}

export default Footer