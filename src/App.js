import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import About from './components/About/About'
import Timeline from './components/Events_Timeline/Timeline'
import Faculty from './components/Faculty/Faculty'
import Home from './components/Home'
import Team from './components/Team/Team'
import './styles.css'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/events" element={<Timeline />}></Route>
          <Route path="/faculty" element={<Faculty />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
