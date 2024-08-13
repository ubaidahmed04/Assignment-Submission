import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './Pages/Detail';
import Layout from './Pages/Layout';
function App() {

  return (
  <>
      <Routes >
        <Route path='/' element={<Layout/>}>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/batch" element={<Detail />} />
        </Route>
      </Routes>
      {/* <Home/> */}
  </>
  )
}

export default App
