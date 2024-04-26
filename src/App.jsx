
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
function App() {
const [count,setcount] = useState(0)

  return (
    <>
<Home/>
    </>
  )
}

export default App
