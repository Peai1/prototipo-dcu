import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
  const [selectedPackage, setSelectedPackage] = useState('usability')

  const packages = {
    discovery: {
      name: 'Discovery',
      icon: '🔍',
      duration: '2 semanas',
      price: '$1,500 - $2,500 USD',
      description: 'Investigación inicial para validar hipótesis de producto y conocer profundamente a tus usuarios',
      includes: [
        '8-12 entrevistas semi-estructuradas con usuarios objetivo',
        'Análisis de competencia y benchmarking',
        'Mapas de empatía y user personas',
        'Customer journey maps',
        'Informe ejecutivo con insights clave',
        'Presentación de resultados al equipo',
        'Recomendaciones estratégicas priorizadas'
      ],
      deliverables: [
        'Documento de research findings (PDF)',
        'User personas (2-3 perfiles)',
        'Journey maps interactivos',
        'Presentación ejecutiva (PPT/Keynote)',
        'Video resumen de hallazgos (3-5 min)'
      ],
      bestFor: 'Startups y equipos que necesitan validar su propuesta de valor antes de invertir en desarrollo'
    },
    usability: {
      name: 'Test de Usabilidad',
      icon: '🎯',
      duration: '3-4 semanas',
      price: '$3,000 - $5,000 USD',
      description: 'Evaluación profunda de tu producto con métricas cuantitativas y cualitativas',
      includes: [
        'Pruebas moderadas con 15-20 usuarios',
        'Protocolo Think-Aloud con tareas específicas',
        'Medición de SUS Score (System Usability Scale)',
        'Tasa de éxito y tiempo de completación de tareas',
        'Análisis de errores y puntos de fricción',
        'Heatmaps y grabaciones de sesiones',
        'Recomendaciones priorizadas por impacto/esfuerzo',
        'A/B testing de soluciones propuestas'
      ],
      deliverables: [
        'Informe completo de usabilidad (PDF)',
        'Dashboard con métricas cuantitativas',
        'Videos de sesiones representativas',
        'Matriz de priorización de mejoras',
        'Wireframes de soluciones propuestas',
        'Plan de implementación por sprints'
      ],
      bestFor: 'Productos digitales en fase de crecimiento que buscan optimizar la experiencia de usuario'
    },
    longitudinal: {
      name: 'Estudios Longitudinales',
      icon: '📈',
      duration: '8+ semanas (ciclos)',
      price: '$5,000+ USD/ciclo',
      description: 'Investigación continua para monitorear comportamiento y evolución a lo largo del tiempo',
      includes: [
        'Seguimiento de cohortes de usuarios por ciclos',
        'Dashboard de métricas en tiempo real',
        'Encuestas periódicas (NPS, CSAT, CES)',
        'Análisis de comportamiento longitudinal',
        'Informes mensuales con tendencias',
        'Reuniones quincenales de seguimiento',
        'Recomendaciones iterativas basadas en datos',
        'Benchmarking continuo con industria'
      ],
      deliverables: [
        'Dashboard web con métricas actualizadas',
        'Informes mensuales de evolución',
        'Base de datos de feedback cualitativo',
        'Presentaciones ejecutivas trimestrales',
        'Roadmap de mejoras basado en datos',
        'Alertas automáticas de anomalías'
      ],
      bestFor: 'Empresas maduras que requieren monitoreo continuo y mejora iterativa de sus productos'
    }
  }

  const currentPackage = packages[selectedPackage]

  return (
    <div className="services">
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <h1>Servicios Modulares de UX Research</h1>
          <p>Elige el paquete que se adapte a tus necesidades y presupuesto</p>
        </div>
      </section>

      {/* Package Selector */}
      <section className="package-selector-section">
        <div className="container">
          <div className="package-tabs">
            <button 
              className={`package-tab ${selectedPackage === 'discovery' ? 'active' : ''}`}
              onClick={() => setSelectedPackage('discovery')}
            >
              <span className="tab-icon">🔍</span>
              <span className="tab-name">Discovery</span>
              <span className="tab-duration">2 semanas</span>
            </button>
            <button 
              className={`package-tab ${selectedPackage === 'usability' ? 'active' : ''}`}
              onClick={() => setSelectedPackage('usability')}
            >
              <span className="tab-icon">🎯</span>
              <span className="tab-name">Test de Usabilidad</span>
              <span className="tab-duration">3-4 semanas</span>
            </button>
            <button 
              className={`package-tab ${selectedPackage === 'longitudinal' ? 'active' : ''}`}
              onClick={() => setSelectedPackage('longitudinal')}
            >
              <span className="tab-icon">📈</span>
              <span className="tab-name">Estudios Longitudinales</span>
              <span className="tab-duration">8+ semanas</span>
            </button>
          </div>

          <div className="package-detail">
            <div className="package-header">
              <div className="package-title-group">
                <span className="package-icon">{currentPackage.icon}</span>
                <div>
                  <h2>{currentPackage.name}</h2>
                  <p className="package-description">{currentPackage.description}</p>
                </div>
              </div>
              <div className="package-pricing">
                <div className="price">{currentPackage.price}</div>
                <div className="duration">{currentPackage.duration}</div>
              </div>
            </div>

            <div className="package-content">
              <div className="package-column">
                <h3>✨ Qué incluye</h3>
                <ul className="package-list">
                  {currentPackage.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="package-column">
                <h3>📦 Entregables</h3>
                <ul className="package-list">
                  {currentPackage.deliverables.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                
                <div className="best-for">
                  <h4>💡 Ideal para:</h4>
                  <p>{currentPackage.bestFor}</p>
                </div>
              </div>
            </div>

            <div className="package-cta">
              <Link to="/contact" className="btn btn-primary">
                Solicitar Cotización
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Agendar Demo Gratuita
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Nuestro Proceso</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="process-number">1</div>
              <div className="process-content">
                <h3>Kickoff & Planning</h3>
                <p>Definimos objetivos, métricas clave y cronograma del proyecto</p>
                <span className="process-time">1-2 días</span>
              </div>
            </div>
            <div className="process-step">
              <div className="process-number">2</div>
              <div className="process-content">
                <h3>Reclutamiento</h3>
                <p>Seleccionamos participantes que coincidan con tu público objetivo</p>
                <span className="process-time">3-5 días</span>
              </div>
            </div>
            <div className="process-step">
              <div className="process-number">3</div>
              <div className="process-content">
                <h3>Ejecución</h3>
                <p>Realizamos entrevistas, pruebas y recolección de datos</p>
                <span className="process-time">1-2 semanas</span>
              </div>
            </div>
            <div className="process-step">
              <div className="process-number">4</div>
              <div className="process-content">
                <h3>Análisis</h3>
                <p>Procesamos datos, identificamos patrones y generamos insights</p>
                <span className="process-time">3-5 días</span>
              </div>
            </div>
            <div className="process-step">
              <div className="process-number">5</div>
              <div className="process-content">
                <h3>Entrega</h3>
                <p>Presentamos resultados y recomendaciones accionables</p>
                <span className="process-time">1 día</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-section">
        <div className="container">
          <h2 className="section-title">Comparación de Paquetes</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Característica</th>
                  <th>Discovery</th>
                  <th>Usabilidad</th>
                  <th>Longitudinal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Duración</td>
                  <td>2 semanas</td>
                  <td>3-4 semanas</td>
                  <td>8+ semanas</td>
                </tr>
                <tr>
                  <td>Usuarios participantes</td>
                  <td>8-12</td>
                  <td>15-20</td>
                  <td>20-50+</td>
                </tr>
                <tr>
                  <td>Métricas cuantitativas</td>
                  <td>❌</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>SUS Score</td>
                  <td>❌</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>Dashboard en vivo</td>
                  <td>❌</td>
                  <td>❌</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>Seguimiento continuo</td>
                  <td>❌</td>
                  <td>❌</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <td>Precio aproximado</td>
                  <td>$1.5K - $2.5K</td>
                  <td>$3K - $5K</td>
                  <td>$5K+ /ciclo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>¿Puedo combinar varios paquetes?</h4>
              <p>Sí, de hecho es recomendable. Muchos clientes comienzan con Discovery y luego continúan con Test de Usabilidad para validar las soluciones propuestas.</p>
            </div>
            <div className="faq-item">
              <h4>¿Cómo reclutan a los participantes?</h4>
              <p>Podemos reclutar desde nuestra base de datos o trabajar con tu base de usuarios existente, según lo que sea más relevante para tu caso.</p>
            </div>
            <div className="faq-item">
              <h4>¿Qué pasa si necesito más usuarios?</h4>
              <p>Podemos ajustar el tamaño de la muestra según tus necesidades. El precio se ajusta proporcionalmente.</p>
            </div>
            <div className="faq-item">
              <h4>¿Incluyen implementación de las mejoras?</h4>
              <p>Entregamos recomendaciones detalladas y wireframes, pero no incluimos desarrollo. Podemos conectarte con partners de confianza si lo necesitas.</p>
            </div>
            <div className="faq-item">
              <h4>¿Trabajan con startups?</h4>
              <p>¡Absolutamente! Tenemos paquetes especiales para startups early-stage con presupuestos más ajustados.</p>
            </div>
            <div className="faq-item">
              <h4>¿Cuánto tiempo toma ver resultados?</h4>
              <p>Los primeros insights aparecen en la primera semana. El informe completo se entrega según el cronograma de cada paquete.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-box">
            <h2>¿No estás seguro cuál paquete elegir?</h2>
            <p>Agenda una consulta gratuita de 30 minutos y te ayudamos a decidir</p>
            <Link to="/contact" className="btn btn-white">
              Hablar con un Experto
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
