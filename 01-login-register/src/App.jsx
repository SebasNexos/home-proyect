import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './auth/pages'
import { RegisterPage } from './auth/pages'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
    
  )
}

export default App
