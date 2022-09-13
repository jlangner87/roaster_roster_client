import '../App.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="brewer_profile">
      <div className="bio_container">
        <h3 className="page_header">About WikiBean</h3>
        <p className="page_bio">It is about coffee. </p>
        <p className="page_bio">
          Over the years, coffee has grown into an essential part of our daily
          lives and a central thread in our culture.
        </p>
        <p className="page_bio">
          The back-bone of the coffee culture is local.{' '}
        </p>
        <blockquote className="page_bio">
          It is the neighbor who hobby roasts. <br />
          It is the little grocery store downtown. <br />
          It is the "mom & pop" coffee bar on the corner.
        </blockquote>
        <p className="page_bio">
          WikiBean is a connection point between independently owned roasteries,
          coffee shops, retailers, and the coffee connoisseurs. It is a place to
          show the world what you've got, and it is a place to discover
          something new to brew.
        </p>
        <p className="page_bio"></p>
      </div>
      <div className="admin_link">
        <Link to="/admin" className="adminlink">
          Roaster Controls
        </Link>
      </div>
    </div>
  )
}

export default Home
