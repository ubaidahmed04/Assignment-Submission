import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import Stream from './Pages/Stream';
import Layout from './Pages/Layout';
import Classwork from './Pages/Classwork';
import InvitePeople from './Pages/InvitePeople';
function App() {

  return (
  <>
      <Routes >
        <Route path="/" element={<SignIn />} />
        <Route path='/' element={<Layout/>}>
        <Route path="/home" element={<Home />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/classwork" element={<Classwork />} />
        <Route path="/invitepeople" element={<InvitePeople />} />
        </Route>
      </Routes>
      {/* <Home/> */}
  </>
  )
}

export default App
