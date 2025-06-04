import './App.css'
import { Link } from 'react-router-dom'

function App(){
  return (
    <>
      <h1>Olá!</h1>
      <Link to="/login"><button>Login</button></Link>
    </>
  )
}

export default App
