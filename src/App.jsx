import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'

// Components
import Home from './pages/Home'
import Services from './pages/Services'
import CaseStudies from './pages/CaseStudies'
import Metrics from './pages/Metrics'
import Contact from './pages/Contact'

// Navigation Component
function Navigation() {
  const location = useLocation()
  
  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/services', label: 'Servicios' },
    { path: '/cases', label: 'Casos de Éxito' },
    { path: '/metrics', label: 'Métricas' },
    { path: '/contact', label: 'Contacto' },
  ]
  
  const handleNavClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={(e) => handleNavClick(e, '/')}>
          <span className="logo-icon">🔬</span>
          <span className="logo-text">UX Lab</span>
        </Link>
        
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.path)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
        <Link to="/contact" className="nav-cta" onClick={(e) => handleNavClick(e, '/contact')}>
          Agendar Demo
        </Link>
      </div>
    </nav>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>🔬 UX Lab</h3>
          <p>Transformamos ideas en experiencias validadas por usuarios reales</p>
        </div>
        
        <div className="footer-section">
          <h4>Servicios</h4>
          <ul>
            <li><Link to="/services">Discovery</Link></li>
            <li><Link to="/services">Test de Usabilidad</Link></li>
            <li><Link to="/services">Estudios Longitudinales</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Recursos</h4>
          <ul>
            <li><Link to="/cases">Casos de Éxito</Link></li>
            <li><Link to="/metrics">Métricas</Link></li>
            <li><a href="#checklist">Checklist UX</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contacto</h4>
          <ul>
            <li>📧 contacto@uxlab.cl</li>
            <li>📱 +56 9 1234 5678</li>
            <li>📍 Santiago, Chile</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 UX Lab. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cases" element={<CaseStudies />} />
            <Route path="/metrics" element={<Metrics />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default App
