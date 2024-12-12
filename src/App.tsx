import "./index.css"
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
