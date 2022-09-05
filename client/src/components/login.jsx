import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="login">
      <form>
        <button>Log in</button>
        <p>::conditional rendering::</p>
        <button>Log out</button>
      </form>
      <p>Not registered yet? That's okay. <br/> <Link to='/register'>Register Here</Link>
      </p>
    </div>
  )
}

export default Login