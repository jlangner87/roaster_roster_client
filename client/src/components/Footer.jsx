import mylogo from '../page_assets/mylogo.png'

const Footer = () => {

  return (
    <div className="footer">
      <img className="mylogo" src={mylogo} />
      <p className="copyright">© 2022 Joshua Langner</p>
    </div>
  )
}

export default Footer