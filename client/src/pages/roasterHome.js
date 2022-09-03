import BeanForm from '../components/BeanForms'
import BeanProfile from '../components/BeanProfile'

const RoasterHome = () => {
  return (
    <div className="roaster_home">
      <p>Roaster Homepage</p>
      <p>this page is private and only accessible by roasters</p>
      <p>My Bean Collection</p>
      <BeanProfile />
      <BeanForm />
    </div>
  )
}
export default RoasterHome
