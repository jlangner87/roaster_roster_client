import '../App.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="brewer_profile">
      <div className="bio_container">
        <h3 className="page_header">About WikiBean</h3>
        <p className="page_bio">
          WikiBean is a connection point between independently owned roasteries,
          coffee shops, retailers, and the coffee connoisseurs.
        </p>
      </div>
      <br></br>
      <Link to="/admin">Roaster Controls</Link>
    </div>
  )
}

export default Home
