import './App.css'
import CallToAction from './components/CallToAction'
import Contact from './components/Contact'
import ConvoSection from './components/ConvoSection'
import Footer from './components/Footer'
import GrowthSection from './components/GrowthSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import StatSection from './components/StatsSection'
import UserSection from './components/UserSection'

function App() {

  return (
    <>
     <Header/>
     <HeroSection/>
     <StatSection/>
     <GrowthSection/>
     <ConvoSection/>
     <UserSection/>
     <CallToAction/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
