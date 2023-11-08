import './App.css'
import Loading from './routes/Loading';
import Homepage from './routes/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Loading />} />
            <Route path="home" element={<Homepage />} />
          </Routes>  
        </Router>
    </>
  )
}
  
export default App
