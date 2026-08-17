import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Proyets from './screens/Proyets'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Proyets />} />
    </Routes>
  )
}

export default App
