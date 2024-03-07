import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css'


import Header from './components/Header/Header'
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";



function App() {

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
