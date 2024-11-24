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

      <BrowserRouter>
      <AppRouter /> {/* En el cambio de formato, esto nos trae la componente AppRouter en la que vamos a renderizar la pagina*/}
      </BrowserRouter>

     </>
  )
}

export default App
