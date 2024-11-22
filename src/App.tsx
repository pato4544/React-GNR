import React from "react"
import "./index.css"
import Navbar from "./components/ui/Navbar"
import Hero from "./components/ui/Hero"
import Footer from "./components/ui/Footer"
import Landing from "./components/ui/Landing"
import AppRouter from "./routes/AppRouter"
import { BrowserRouter } from "react-router"
function App() {

  return (
     <>
    {/* //  <Navbar/>

    //  <Hero/>

    //  <Landing/>

    //  <Footer/> */}
      <BrowserRouter>
      <AppRouter />
      </BrowserRouter>
     </>
  )
}

export default App
