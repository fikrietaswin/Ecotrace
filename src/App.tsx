import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import CarbonCalculator from './components/CarbonCalculator'
import TheoryOfChange from './components/TheoryOfChange'
import Projects from './components/Projects'
import Reports from './components/Reports'
import Settings from './components/Settings'
import Profile from './components/Profile'
import Notifications from './components/Notifications'
import Help from './components/Help'
import Ecotourism from './components/Ecotourism'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calculator" element={<CarbonCalculator />} />
              <Route path="/theory-of-change" element={<TheoryOfChange />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/help" element={<Help />} />
              <Route path="/ecotourism" element={<Ecotourism />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
