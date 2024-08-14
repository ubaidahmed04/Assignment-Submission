import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './Pages/Detail';
import Stream from './Pages/Stream';
import Layout from './Pages/Layout';
function App() {

  return (
  <>
      <Routes >
        <Route path="/" element={<SignIn />} />
        <Route path='/' element={<Layout/>}>
        <Route path="/home" element={<Home />} />
        <Route path="/batch" element={<Detail />} />
        <Route path="/stream" element={<Stream />} />
        </Route>
      </Routes>
      {/* <Home/> */}
  </>
  )
}

export default App
