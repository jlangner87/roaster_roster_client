import BeanForm from '../components/BeanForms'
import UpdateDeleteBean from '../components/UpdateBean'

const RoasterHome = () => {
  return (
    <div className="roaster_home">
      <p>Roaster Homepage</p>
      <p>this page is private and only accessible by roasters</p>
      <BeanForm />
    </div>
  )
}

export default RoasterHome
