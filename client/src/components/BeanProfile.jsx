import BeanForm from "./BeanForms"
import UpdateDeleteBean from "./UpdateBean"

const BeanProfile = () => {

  return (
    <div className="baean_profile">
      <h1>This is my bean profile component!</h1>
      <p> Lots of props here showing yummy beans!</p>
      <BeanForm/>
      . . . 
      <UpdateDeleteBean/>
    </div>
  )
}

export default BeanProfile