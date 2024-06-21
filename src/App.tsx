import './App.css'
import Loading from './routes/Loading';
import Homepage from './routes/Homepage';
import Profile from './routes/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Profile/>} />
            <Route path="loading" element={<Loading />} />
            <Route path="private" element={<Homepage />} />
          </Routes>  
        </Router>
    </>
  )
}
  
export default App
