import React from 'react'
import { NoPage } from './NotFoundStyles.js'
import Footer from '../../components/Footer/Footer.jsx'
import Errorimg from '../../img/404error.png'
import NavBar from '../../components/NavBar/NavBar.jsx'


export function Nopage() {
  return (
    <div>
      {/* <NavBar/> */}
      <NoPage>

          <div>
            <img src= {Errorimg} alt=" error 404" />
          </div>

          <div>
              <h2>Upss! esta página no existe.</h2>
              <br />
              <p>Lo sentimos, no hemos podido localizar la página que buscas, por favor, vuelve a intentarlo.</p>
          </div>

          <button onClick={() => window.location.href = "/"}>Volver a Home</button>

          
      </NoPage>  
     <Footer></Footer>
    </div>
 
  )
}

export default Nopage


