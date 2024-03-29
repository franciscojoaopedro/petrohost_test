import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './components/Home';
import "./App.css"

function App() {
  

  return (
    <div className='Container'>
      <Header/>
        <HomePage/>
      <Footer/>
    </div>
  )
}

export default App
