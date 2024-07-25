import Header from './components/Header'
import './App.css'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Education from './components/Education'
import { motion } from 'framer-motion'

function App() {


  return (
    <>
      <motion.div 
      className="max-w-screen-md mx-auto flex flex-col gap-5 md:gap-10"
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 2}}>
        <Header />
        <About/>
        <Education/>
        <Projects/>
        <Footer/>
      </motion.div>
    </>
  )
}

export default App
