import React from 'react'
import './Metrics.css'

function Metrics() {
  const metrics = [
    {
      name: 'SUS Score',
      fullName: 'System Usability Scale',
      icon: '📊',
      description: 'Métrica estándar de la industria para medir la usabilidad percibida de un sistema',
      scale: '0-100 puntos',
      interpretation: {
        excellent: '> 80.3',
        good: '68-80.3',
        ok: '51-68',
        poor: '< 51'
      },
      benefits: [
        'Comparación con benchmarks de la industria',
        'Métrica validada científicamente',
        'Fácil de aplicar y analizar',
        'Detecta problemas de usabilidad'
      ],
      usage: 'Se aplica después de que los usuarios completan tareas en el producto. Consiste en 10 preguntas en escala Likert.'
    },
    {
      name: 'Task Success Rate',
      fullName: 'Tasa de Éxito de Tareas',
      icon: '🎯',
      description: 'Porcentaje de usuarios que completan exitosamente una tarea específica',
      scale: '0-100%',
      interpretation: {
        excellent: '> 90%',
        good: '75-90%',
        ok: '60-75%',
        poor: '< 60%'
      },
      benefits: [
        'Identifica puntos de fricción específicos',
        'Métrica objetiva y cuantificable',
        'Permite comparación antes/después',
        'Guía decisiones de diseño'
      ],
      usage: 'Se mide durante test de usabilidad moderados, definiendo criterios claros de éxito para cada tarea.'
    },
    {
      name: 'Time on Task',
      fullName: 'Tiempo Promedio de Tarea',
      icon: '⏱️',
      description: 'Tiempo que tarda un usuario en completar una tarea específica',
      scale: 'Minutos/Segundos',
      interpretation: {
        excellent: 'Bajo vs benchmark',
        good: 'Similar a benchmark',
        ok: 'Ligeramente sobre benchmark',
        poor: 'Muy sobre benchmark'
      },
      benefits: [
        'Detecta ineficiencias en el flujo',
        'Cuantifica mejoras de eficiencia',
        'Predice satisfacción del usuario',
        'Calcula ROI de mejoras'
      ],
      usage: 'Se registra automáticamente durante las pruebas usando herramientas de grabación y cronometraje.'
    },
    {
      name: 'NPS',
      fullName: 'Net Promoter Score',
      icon: '⭐',
      description: 'Mide la lealtad y disposición de los usuarios a recomendar el producto',
      scale: '-100 a +100',
      interpretation: {
        excellent: '> 50',
        good: '30-50',
        ok: '0-30',
        poor: '< 0'
      },
      benefits: [
        'Predice crecimiento del producto',
        'Métrica de negocio directa',
        'Benchmark contra competencia',
        'Identifica promotores y detractores'
      ],
      usage: 'Se pregunta: "¿Qué tan probable es que recomiendes este producto?" en escala 0-10.'
    },
    {
      name: 'Error Rate',
      fullName: 'Tasa de Errores',
      icon: '❌',
      description: 'Número de errores cometidos por los usuarios al realizar tareas',
      scale: 'Errores por tarea',
      interpretation: {
        excellent: '0-1 errores',
        good: '2-3 errores',
        ok: '4-5 errores',
        poor: '> 5 errores'
      },
      benefits: [
        'Identifica problemas de UI/UX',
        'Previene frustración del usuario',
        'Reduce costos de soporte',
        'Mejora tasa de conversión'
      ],
      usage: 'Se registran todos los clicks incorrectos, backtracking y consultas de ayuda durante las pruebas.'
    },
    {
      name: 'CSAT',
      fullName: 'Customer Satisfaction Score',
      icon: '😊',
      description: 'Mide la satisfacción inmediata con una experiencia o interacción específica',
      scale: '1-5 estrellas',
      interpretation: {
        excellent: '> 4.5',
        good: '4.0-4.5',
        ok: '3.5-4.0',
        poor: '< 3.5'
      },
      benefits: [
        'Feedback inmediato post-interacción',
        'Fácil de entender para stakeholders',
        'Permite segmentación por feature',
        'Complementa otras métricas'
      ],
      usage: 'Se pregunta después de interacciones clave: "¿Qué tan satisfecho estás con esta experiencia?"'
    }
  ]

  return (
    <div className="metrics">
      {/* Hero */}
      <section className="metrics-hero">
        <div className="container">
          <h1>Métricas de UX que Utilizamos</h1>
          <p>Datos objetivos para tomar decisiones con confianza</p>
        </div>
      </section>

      {/* Intro */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>¿Por qué medimos?</h2>
            <p>
              En UX Lab no trabajamos con intuiciones. Cada recomendación que hacemos está 
              respaldada por datos cuantitativos y cualitativos. Utilizamos métricas validadas 
              científicamente que permiten comparar resultados, priorizar mejoras y demostrar 
              el ROI de las inversiones en UX.
            </p>
            <div className="intro-stats">
              <div className="intro-stat">
                <span className="intro-stat-number">6</span>
                <span className="intro-stat-label">Métricas principales</span>
              </div>
              <div className="intro-stat">
                <span className="intro-stat-number">100%</span>
                <span className="intro-stat-label">Proyectos con métricas</span>
              </div>
              <div className="intro-stat">
                <span className="intro-stat-number">ISO</span>
                <span className="intro-stat-label">Estándares internacionales</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="metrics-grid-section">
        <div className="container">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card-large">
              <div className="metric-card-header">
                <div className="metric-icon-large">{metric.icon}</div>
                <div className="metric-title-group">
                  <h3>{metric.name}</h3>
                  <p className="metric-full-name">{metric.fullName}</p>
                </div>
              </div>

              <p className="metric-description">{metric.description}</p>

              <div className="metric-details">
                <div className="metric-scale">
                  <h4>📏 Escala</h4>
                  <p>{metric.scale}</p>
                </div>

                <div className="metric-interpretation">
                  <h4>🎨 Interpretación</h4>
                  <div className="interpretation-scale">
                    <div className="interpretation-item excellent">
                      <span className="interpretation-label">Excelente</span>
                      <span className="interpretation-value">{metric.interpretation.excellent}</span>
                    </div>
                    <div className="interpretation-item good">
                      <span className="interpretation-label">Bueno</span>
                      <span className="interpretation-value">{metric.interpretation.good}</span>
                    </div>
                    <div className="interpretation-item ok">
                      <span className="interpretation-label">Aceptable</span>
                      <span className="interpretation-value">{metric.interpretation.ok}</span>
                    </div>
                    <div className="interpretation-item poor">
                      <span className="interpretation-label">Deficiente</span>
                      <span className="interpretation-value">{metric.interpretation.poor}</span>
                    </div>
                  </div>
                </div>

                <div className="metric-benefits">
                  <h4>✨ Beneficios</h4>
                  <ul>
                    {metric.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="metric-usage">
                  <h4>🔬 Cómo lo medimos</h4>
                  <p>{metric.usage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="methodology-section">
        <div className="container">
          <h2 className="section-title">Nuestra Metodología</h2>
          <div className="methodology-grid">
            <div className="methodology-card">
              <div className="methodology-icon">🎯</div>
              <h3>Definición de KPIs</h3>
              <p>En el kickoff definimos qué métricas son más relevantes para tus objetivos de negocio</p>
            </div>
            <div className="methodology-card">
              <div className="methodology-icon">📊</div>
              <h3>Medición Baseline</h3>
              <p>Establecemos una línea base con tu producto actual para poder comparar mejoras</p>
            </div>
            <div className="methodology-card">
              <div className="methodology-icon">🔬</div>
              <h3>Recolección Rigurosa</h3>
              <p>Aplicamos protocolos estandarizados para garantizar la validez de los datos</p>
            </div>
            <div className="methodology-card">
              <div className="methodology-icon">📈</div>
              <h3>Análisis Estadístico</h3>
              <p>Procesamos los datos con técnicas estadísticas para identificar patrones significativos</p>
            </div>
            <div className="methodology-card">
              <div className="methodology-icon">💡</div>
              <h3>Insights Accionables</h3>
              <p>Traducimos los números en recomendaciones específicas priorizadas por impacto</p>
            </div>
            <div className="methodology-card">
              <div className="methodology-icon">🎁</div>
              <h3>Presentación Clara</h3>
              <p>Entregamos dashboards visuales que facilitan la comprensión de stakeholders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmarks */}
      <section className="benchmarks-section">
        <div className="container">
          <h2 className="section-title">Benchmarks de la Industria</h2>
          <p className="section-subtitle">Compara tu producto con estándares globales</p>
          
          <div className="benchmark-table">
            <table>
              <thead>
                <tr>
                  <th>Métrica</th>
                  <th>Promedio Industria</th>
                  <th>Top 25%</th>
                  <th>Top 10%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>SUS Score</strong></td>
                  <td>68</td>
                  <td>77</td>
                  <td>85+</td>
                </tr>
                <tr>
                  <td><strong>Task Success Rate</strong></td>
                  <td>75%</td>
                  <td>85%</td>
                  <td>92%+</td>
                </tr>
                <tr>
                  <td><strong>NPS</strong></td>
                  <td>30</td>
                  <td>50</td>
                  <td>70+</td>
                </tr>
                <tr>
                  <td><strong>CSAT</strong></td>
                  <td>3.8</td>
                  <td>4.3</td>
                  <td>4.7+</td>
                </tr>
                <tr>
                  <td><strong>Error Rate</strong></td>
                  <td>4.2</td>
                  <td>2.5</td>
                  <td>&lt; 1.5</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="benchmark-note">
            * Benchmarks basados en estudios de Nielsen Norman Group, Measuring UX y datos internos
          </p>
        </div>
      </section>
    </div>
  )
}

export default Metrics
