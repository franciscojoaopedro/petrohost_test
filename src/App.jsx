import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './components/Home';
import "./App.css"
import { Login } from './pages/login';

function App() {
  

  return (
    <>
    <Header/>
    <div className='Container'>
        <HomePage/>
      <Footer/>
    </div>
    </>
  )
}

export default App
