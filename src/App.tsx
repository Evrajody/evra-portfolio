import { useState } from 'react'
import { Navbar, Header, Propos, Competence, Projets, Contact } from './components'
import './main.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main-content">

      <div className="bg-babyPowder z-20 backdrop-blur-xl fixed left-0 right-0">
        <Navbar/>
      </div>

      <main>

        <Header/>

        <Propos/>

        <Competence/>

        <Projets/>

        <Contact/>


      </main>


    </div>
  )
}

export default App
