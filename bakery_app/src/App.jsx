import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import CustomerReviews from './components/CustomerReviews'


function App() {
  

  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={< NavBar />} />
          <Route path='/reviews' element={< CustomerReviews />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
