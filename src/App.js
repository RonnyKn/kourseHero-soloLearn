import "./App.css"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import { featured } from "./dataFeatured/Data"
function App() {
  return (
    <>
      <Navbar />
      <Header featured={featured} />
    </>
  )
}

export default App
