import { useState } from 'react'
import HomePage from './components/HomePage.jsx'
import './HomePage.css'

function App() {
  const [start, setStarter] = useState("home")

  if(start === "home"){
    return(
      <>
        <HomePage />
      </>
    );
  }
}

export default App
