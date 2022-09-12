import '../App.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <h3>About WikiBean</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque
        purus semper eget duis at tellus. Risus commodo viverra maecenas
        accumsan. Aliquam ultrices sagittis orci a scelerisque purus semper.
        Vitae suscipit tellus mauris a diam maecenas. Malesuada proin libero
        nunc consequat interdum varius sit amet mattis. Consectetur adipiscing
        elit pellentesque habitant morbi tristique senectus et netus. Commodo
        quis imperdiet massa tincidunt nunc pulvinar sapien et. Velit
        scelerisque in dictum non. Elit at imperdiet dui accumsan sit amet nulla
        facilisi. Viverra tellus in hac habitasse platea. Mi bibendum neque
        egestas congue quisque egestas diam. Lectus magna fringilla urna
        porttitor rhoncus dolor purus non enim. Justo laoreet sit amet cursus
        sit amet dictum. Pellentesque elit eget gravida cum sociis natoque
        penatibus. Semper eget duis at tellus at urna condimentum mattis
        pellentesque. Nulla porttitor massa id neque aliquam vestibulum morbi
        blandit cursus.
      </p>
      <br></br>
      <Link to="/admin">Roaster Controls</Link>
    </div>
  )
}

export default Home
