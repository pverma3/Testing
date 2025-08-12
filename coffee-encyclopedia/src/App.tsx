import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Encyclopedia from './pages/Encyclopedia'
import CoffeeDetail from './pages/CoffeeDetail'
import BeanDetail from './pages/BeanDetail'
import Graph from './pages/Graph'

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/encyclopedia" element={<Encyclopedia />} />
          <Route path="/coffees/:id" element={<CoffeeDetail />} />
          <Route path="/beans/:id" element={<BeanDetail />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
