import './App.css'
import Hero from './components/Hero'
import Learn from './components/Learn'
import Topper from './components/Topper'
import Contact from './components/contact'
import Footer from './components/footer'
import NAVBAR from './components/navbar'
import Publicity from './components/publicity'
function App() {

  return (
    <div className='App'>
      <NAVBAR />
      <Hero />
      <Publicity />
      <Topper />
      <Learn />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
