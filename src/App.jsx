import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './Pages/Detail';
function App() {

  return (
  <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/batch" element={<Detail />} />
      </Routes>
      {/* <Home/> */}
  </>
  )
}

export default App
