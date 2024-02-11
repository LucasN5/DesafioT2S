import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import About from './components/About'
import Product from './components/Product'
import Benefits from './components/Benefits'
import Contact from './components/Contact'

function App() {

  return (
   <div className=''>
    <header className=''>
      <NavBar/>
    </header>

    <body>
      <main>
        <Home/>
        <About/>
        <Product/>
        <Benefits/>
        <Contact/>
      </main>
    </body>  

   </div>
  )
}

export default App
