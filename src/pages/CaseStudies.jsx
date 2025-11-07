import React, { useState } from 'react'
import './CaseStudies.css'

function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('all')

  const caseStudies = [
    {
      id: 1,
      industry: 'fintech',
      company: 'PayFlow',
      logo: '💳',
      title: 'Optimización del flujo de onboarding en app financiera',
      challenge: 'Los usuarios abandonaban el proceso de registro en el paso de verificación de identidad. La tasa de conversión era solo del 32%.',
      solution: 'Realizamos test de usabilidad con 18 usuarios y rediseñamos el flujo, simplificando el proceso de verificación y agregando indicadores de progreso claros.',
      metrics: {
        sus: { before: 52, after: 84 },
        taskSuccess: { before: 45, after: 92 },
        timeOnTask: { before: 8.5, after: 3.2 },
        nps: { before: 28, after: 68 }
      },
      impact: [
        'Aumento del 187% en tasa de conversión',
        'Reducción del 62% en tiempo de completación',
        'Disminución del 75% en tickets de soporte',
        'ROI estimado: $180K USD/año'
      ],
      duration: '4 semanas',
      testimonial: {
        text: 'Los resultados superaron nuestras expectativas. En solo 4 semanas teníamos un plan claro y métricas que respaldaban cada decisión.',
        author: 'María Rodríguez',
        role: 'Product Owner, PayFlow'
      }
    },
    {
      id: 2,
      industry: 'ecommerce',
      company: 'MercadoPlus',
      logo: '🛒',
      title: 'Rediseño del checkout para reducir abandono de carrito',
      challenge: 'El 68% de los usuarios abandonaban el carrito antes de completar la compra. No entendíamos las razones específicas del abandono.',
      solution: 'Combinamos análisis de embudo con test de usabilidad moderados. Identificamos 7 puntos de fricción críticos en el proceso de pago.',
      metrics: {
        sus: { before: 48, after: 78 },
        taskSuccess: { before: 32, after: 87 },
        timeOnTask: { before: 6.8, after: 2.9 },
        nps: { before: 15, after: 55 }
      },
      impact: [
        'Reducción del 42% en abandono de carrito',
        'Aumento del 156% en conversión',
        'Mejora del 267% en NPS',
        'ROI estimado: $420K USD/año'
      ],
      duration: '3 semanas',
      testimonial: {
        text: 'La inversión en UX research se pagó sola en el primer mes. Ahora es parte fundamental de nuestro proceso de desarrollo.',
        author: 'Carlos Mendoza',
        role: 'Head of Growth, MercadoPlus'
      }
    },
    {
      id: 3,
      industry: 'saas',
      company: 'CloudManager',
      logo: '☁️',
      title: 'Validación de nueva funcionalidad antes de desarrollo',
      challenge: 'El equipo quería desarrollar un módulo de reportes avanzados, pero no estaban seguros si los usuarios lo valorarían lo suficiente.',
      solution: 'Realizamos Discovery research con 12 clientes actuales y potenciales. Validamos la propuesta de valor y priorizamos funcionalidades.',
      metrics: {
        sus: { before: 65, after: 82 },
        taskSuccess: { before: 58, after: 91 },
        timeOnTask: { before: 12.0, after: 5.5 },
        nps: { before: 42, after: 71 }
      },
      impact: [
        'Ahorro de $85K USD en desarrollo innecesario',
        'Aumento del 57% en adopción de la feature',
        'Reducción del 54% en tiempo de desarrollo',
        'Mejora del 69% en NPS de la funcionalidad'
      ],
      duration: '2 semanas',
      testimonial: {
        text: 'Evitamos invertir 3 meses en funcionalidades que los usuarios no querían. El ROI del research fue brutal.',
        author: 'Ana Silva',
        role: 'CPO, CloudManager'
      }
    },
    {
      id: 4,
      industry: 'edtech',
      company: 'LearnHub',
      logo: '📚',
      title: 'Mejora de la experiencia de estudiantes en plataforma educativa',
      challenge: 'Los estudiantes reportaban dificultad para navegar el contenido y encontrar materiales relevantes. Bajo engagement con el material.',
      solution: 'Estudio longitudinal de 10 semanas con cohorte de 30 estudiantes. Monitoreamos comportamiento y recolectamos feedback continuo.',
      metrics: {
        sus: { before: 55, after: 86 },
        taskSuccess: { before: 51, after: 89 },
        timeOnTask: { before: 15.5, after: 6.8 },
        nps: { before: 32, after: 74 }
      },
      impact: [
        'Aumento del 132% en tiempo de sesión promedio',
        'Mejora del 75% en tasa de completación de cursos',
        'Reducción del 58% en consultas de soporte',
        'Incremento del 42% en renovaciones'
      ],
      duration: '10 semanas',
      testimonial: {
        text: 'El seguimiento continuo nos permitió iterar rápidamente y ver el impacto real de cada cambio en los estudiantes.',
        author: 'Roberto Fuentes',
        role: 'Founder, LearnHub'
      }
    }
  ]

  const industries = [
    { value: 'all', label: 'Todas las Industrias', icon: '🌐' },
    { value: 'fintech', label: 'Fintech', icon: '💳' },
    { value: 'ecommerce', label: 'E-commerce', icon: '🛒' },
    { value: 'saas', label: 'SaaS', icon: '☁️' },
    { value: 'edtech', label: 'EdTech', icon: '📚' }
  ]

  const filteredCases = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(c => c.industry === selectedIndustry)

  return (
    <div className="case-studies">
      {/* Hero */}
      <section className="cases-hero">
        <div className="container">
          <h1>Casos de Éxito</h1>
          <p>Resultados reales, medibles y comprobados</p>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="filter-section">
        <div className="container">
          <div className="industry-filters">
            {industries.map(industry => (
              <button
                key={industry.value}
                className={`industry-filter ${selectedIndustry === industry.value ? 'active' : ''}`}
                onClick={() => setSelectedIndustry(industry.value)}
              >
                <span className="filter-icon">{industry.icon}</span>
                <span className="filter-label">{industry.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="cases-section">
        <div className="container">
          {filteredCases.map((caseStudy) => (
            <div key={caseStudy.id} className="case-card">
              <div className="case-header">
                <div className="case-company">
                  <span className="company-logo">{caseStudy.logo}</span>
                  <div className="company-info">
                    <h3>{caseStudy.company}</h3>
                    <span className="case-duration">⏱️ {caseStudy.duration}</span>
                  </div>
                </div>
              </div>

              <h2 className="case-title">{caseStudy.title}</h2>

              <div className="case-content">
                <div className="case-text">
                  <div className="case-section">
                    <h4>🎯 Desafío</h4>
                    <p>{caseStudy.challenge}</p>
                  </div>

                  <div className="case-section">
                    <h4>💡 Solución</h4>
                    <p>{caseStudy.solution}</p>
                  </div>

                  <div className="case-section">
                    <h4>📊 Impacto del Negocio</h4>
                    <ul className="impact-list">
                      {caseStudy.impact.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="case-metrics">
                  <h4>📈 Métricas de UX</h4>
                  
                  <div className="metric-card">
                    <div className="metric-header">
                      <span className="metric-name">SUS Score</span>
                      <span className="metric-info">System Usability Scale</span>
                    </div>
                    <div className="metric-comparison">
                      <div className="metric-before">
                        <span className="metric-label">Antes</span>
                        <span className="metric-value bad">{caseStudy.metrics.sus.before}</span>
                      </div>
                      <span className="metric-arrow">→</span>
                      <div className="metric-after">
                        <span className="metric-label">Después</span>
                        <span className="metric-value good">{caseStudy.metrics.sus.after}</span>
                      </div>
                    </div>
                    <div className="metric-improvement">
                      +{caseStudy.metrics.sus.after - caseStudy.metrics.sus.before} puntos
                    </div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-header">
                      <span className="metric-name">Tasa de Éxito</span>
                      <span className="metric-info">Task Success Rate</span>
                    </div>
                    <div className="metric-comparison">
                      <div className="metric-before">
                        <span className="metric-label">Antes</span>
                        <span className="metric-value bad">{caseStudy.metrics.taskSuccess.before}%</span>
                      </div>
                      <span className="metric-arrow">→</span>
                      <div className="metric-after">
                        <span className="metric-label">Después</span>
                        <span className="metric-value good">{caseStudy.metrics.taskSuccess.after}%</span>
                      </div>
                    </div>
                    <div className="metric-improvement">
                      +{caseStudy.metrics.taskSuccess.after - caseStudy.metrics.taskSuccess.before}% mejora
                    </div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-header">
                      <span className="metric-name">Tiempo de Tarea</span>
                      <span className="metric-info">Average Time on Task</span>
                    </div>
                    <div className="metric-comparison">
                      <div className="metric-before">
                        <span className="metric-label">Antes</span>
                        <span className="metric-value bad">{caseStudy.metrics.timeOnTask.before} min</span>
                      </div>
                      <span className="metric-arrow">→</span>
                      <div className="metric-after">
                        <span className="metric-label">Después</span>
                        <span className="metric-value good">{caseStudy.metrics.timeOnTask.after} min</span>
                      </div>
                    </div>
                    <div className="metric-improvement">
                      -{Math.round((1 - caseStudy.metrics.timeOnTask.after / caseStudy.metrics.timeOnTask.before) * 100)}% reducción
                    </div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-header">
                      <span className="metric-name">Net Promoter Score</span>
                      <span className="metric-info">NPS</span>
                    </div>
                    <div className="metric-comparison">
                      <div className="metric-before">
                        <span className="metric-label">Antes</span>
                        <span className="metric-value bad">{caseStudy.metrics.nps.before}</span>
                      </div>
                      <span className="metric-arrow">→</span>
                      <div className="metric-after">
                        <span className="metric-label">Después</span>
                        <span className="metric-value good">{caseStudy.metrics.nps.after}</span>
                      </div>
                    </div>
                    <div className="metric-improvement">
                      +{caseStudy.metrics.nps.after - caseStudy.metrics.nps.before} puntos
                    </div>
                  </div>
                </div>
              </div>

              <div className="case-testimonial">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{caseStudy.testimonial.text}</p>
                <div className="testimonial-author">
                  <strong>{caseStudy.testimonial.author}</strong>
                  <span>{caseStudy.testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Summary */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Resultados Promedio</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-number">+72%</div>
              <div className="stat-label">Mejora Promedio en Métricas UX</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <div className="stat-number">$240K</div>
              <div className="stat-label">ROI Promedio Anual</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <div className="stat-number">3.5 sem</div>
              <div className="stat-label">Tiempo Promedio de Proyecto</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">Satisfacción de Clientes</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
