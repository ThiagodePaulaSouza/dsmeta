import { Header } from "./components/Header"
import { Sales } from "./components/Sales"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Sales />
    </div>
  )
}

export default App
