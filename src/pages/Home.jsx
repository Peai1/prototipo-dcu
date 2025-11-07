import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Validamos tus ideas con <span className="gradient-text">usuarios reales</span>
            </h1>
            <p className="hero-description">
              Evita invertir en funcionalidades que nadie usa. Obtén métricas claras,
              insights accionables y mejora el rendimiento de tus productos digitales.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">40%</div>
                <div className="stat-label">Reducción en tiempo de desarrollo</div>
              </div>
              <div className="stat">
                <div className="stat-number">85%</div>
                <div className="stat-label">Mejora en satisfacción de usuario</div>
              </div>
              <div className="stat">
                <div className="stat-number">2-4 sem</div>
                <div className="stat-label">Resultados tangibles</div>
              </div>
            </div>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">
                Agendar Demo Gratuita
              </Link>
              <Link to="/cases" className="btn btn-secondary">
                Ver Casos de Éxito
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-card">
              <div className="card-header">
                <span className="card-icon">📊</span>
                <span className="card-title">Test de Usabilidad</span>
              </div>
              <div className="card-metric">
                <div className="metric-label">Tasa de Éxito</div>
                <div className="metric-value">
                  <span className="metric-before">45%</span>
                  <span className="metric-arrow">→</span>
                  <span className="metric-after">92%</span>
                </div>
              </div>
              <div className="card-metric">
                <div className="metric-label">SUS Score</div>
                <div className="metric-value">
                  <span className="metric-before">52</span>
                  <span className="metric-arrow">→</span>
                  <span className="metric-after">84</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <h2 className="section-title">¿Te suena familiar?</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <span className="problem-icon">💸</span>
              <h3>Inversión sin retorno</h3>
              <p>Desarrollas funcionalidades que los usuarios no valoran ni utilizan</p>
            </div>
            <div className="problem-card">
              <span className="problem-icon">❓</span>
              <h3>Decisiones sin datos</h3>
              <p>Tomas decisiones de producto basadas en suposiciones, no en evidencia</p>
            </div>
            <div className="problem-card">
              <span className="problem-icon">😤</span>
              <h3>Usuarios frustrados</h3>
              <p>Tus usuarios abandonan el producto porque no encuentran lo que buscan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="container">
          <h2 className="section-title">Cómo te ayudamos</h2>
          <div className="solution-grid">
            <div className="solution-step">
              <div className="step-number">1</div>
              <h3>Probamos con usuarios reales</h3>
              <p>Validamos tus hipótesis con tu público objetivo en entornos controlados</p>
            </div>
            <div className="solution-step">
              <div className="step-number">2</div>
              <h3>Entregamos métricas claras</h3>
              <p>SUS Score, NPS, tasa de éxito de tareas y tiempo de completación</p>
            </div>
            <div className="solution-step">
              <div className="step-number">3</div>
              <h3>Proponemos mejoras accionables</h3>
              <p>Recomendaciones específicas priorizadas por impacto y esfuerzo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">Paquetes modulares adaptados a tus necesidades</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Discovery</h3>
              <p className="service-duration">2 semanas</p>
              <p className="service-description">
                Investigación inicial para validar hipótesis de producto y conocer a tus usuarios
              </p>
              <ul className="service-features">
                <li>✓ 8-12 entrevistas con usuarios</li>
                <li>✓ Mapas de empatía y journey</li>
                <li>✓ Informe ejecutivo con insights</li>
              </ul>
            </div>
            
            <div className="service-card featured">
              <div className="service-badge">Más popular</div>
              <div className="service-icon">🎯</div>
              <h3>Test de Usabilidad</h3>
              <p className="service-duration">3-4 semanas</p>
              <p className="service-description">
                Evaluación profunda de tu producto con métricas cuantitativas y cualitativas
              </p>
              <ul className="service-features">
                <li>✓ Pruebas con 15-20 usuarios</li>
                <li>✓ SUS Score y métricas de tarea</li>
                <li>✓ Recomendaciones priorizadas</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3>Estudios Longitudinales</h3>
              <p className="service-duration">8+ semanas</p>
              <p className="service-description">
                Investigación continua para monitorear el comportamiento a lo largo del tiempo
              </p>
              <ul className="service-features">
                <li>✓ Seguimiento por ciclos</li>
                <li>✓ Dashboard de métricas en vivo</li>
                <li>✓ Informes mensuales</li>
              </ul>
            </div>
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-primary">
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                El laboratorio UX nos ayudó a validar nuestra hipótesis antes de invertir 
                en desarrollo. Ahorramos más de $50.000 USD en funcionalidades innecesarias.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">MR</div>
                <div className="author-info">
                  <div className="author-name">María Rodríguez</div>
                  <div className="author-title">Product Owner, Fintech Startup</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                Los resultados fueron sorprendentes. En solo 3 semanas teníamos métricas 
                claras y un plan de acción. Nuestro SUS Score mejoró de 52 a 84.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">JC</div>
                <div className="author-info">
                  <div className="author-name">Juan Carlos López</div>
                  <div className="author-title">Director de Innovación, Retail</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                La transparencia en los entregables y la claridad de los informes nos 
                permitió tomar decisiones con confianza. Totalmente recomendable.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">AP</div>
                <div className="author-info">
                  <div className="author-name">Andrea Pérez</div>
                  <div className="author-title">CEO, EdTech</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Listo para validar tus ideas?</h2>
            <p>Agenda una demo gratuita de 30 minutos y descubre cómo podemos ayudarte</p>
            <Link to="/contact" className="btn btn-white">
              Agendar Demo Ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
