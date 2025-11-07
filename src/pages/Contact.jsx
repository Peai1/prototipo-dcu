import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    service: 'usability',
    message: '',
    budget: '',
    timeline: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="contact">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1>¿Listo para comenzar?</h1>
          <p>Agenda una demo gratuita o solicita una cotización</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Solicita una Cotización</h2>
              <p className="form-description">
                Completa el formulario y te responderemos en menos de 24 horas
              </p>

              {submitted && (
                <div className="success-message">
                  ✓ ¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nombre completo *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="juan@empresa.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Empresa *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Mi Empresa S.A."
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="role">Cargo *</label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      placeholder="Product Owner"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+56 9 1234 5678"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Servicio de interés *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="discovery">Discovery (2 semanas)</option>
                      <option value="usability">Test de Usabilidad (3-4 semanas)</option>
                      <option value="longitudinal">Estudios Longitudinales (8+ semanas)</option>
                      <option value="custom">Servicio Personalizado</option>
                      <option value="consulting">Solo Consultoría</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="budget">Presupuesto estimado</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona un rango</option>
                      <option value="1-3k">$1,000 - $3,000 USD</option>
                      <option value="3-5k">$3,000 - $5,000 USD</option>
                      <option value="5-10k">$5,000 - $10,000 USD</option>
                      <option value="10k+">Más de $10,000 USD</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="timeline">¿Cuándo necesitas comenzar?</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona un plazo</option>
                      <option value="urgent">Lo antes posible (1-2 semanas)</option>
                      <option value="soon">En el corto plazo (3-4 semanas)</option>
                      <option value="planning">Estamos planificando (1-2 meses)</option>
                      <option value="exploring">Solo explorando opciones</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Cuéntanos sobre tu proyecto *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Describe brevemente tu producto, los desafíos que enfrentas y qué esperas lograr..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Enviar Solicitud
                </button>

                <p className="form-note">
                  Al enviar este formulario, aceptas que te contactemos para discutir tu proyecto.
                  Respetamos tu privacidad y no compartimos tus datos.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="contact-sidebar">
              {/* Demo Scheduling */}
              <div className="sidebar-card">
                <h3>🎯 Agenda una Demo Gratuita</h3>
                <p>Videollamada de 30 minutos para conocer tu proyecto</p>
                <ul className="demo-includes">
                  <li>✓ Revisión de tu caso de uso</li>
                  <li>✓ Recomendación de servicio</li>
                  <li>✓ Cotización preliminar</li>
                  <li>✓ Respuestas a tus preguntas</li>
                </ul>
                <a href="https://calendly.com/uxlab-demo" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-block">
                  Agendar en Calendly
                </a>
              </div>

              {/* Contact Info */}
              <div className="sidebar-card">
                <h3>📞 Información de Contacto</h3>
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <span className="info-icon">📧</span>
                    <div className="info-content">
                      <strong>Email</strong>
                      <a href="mailto:contacto@uxlab.cl">contacto@uxlab.cl</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <span className="info-icon">📱</span>
                    <div className="info-content">
                      <strong>Teléfono</strong>
                      <a href="tel:+56912345678">+56 9 1234 5678</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <span className="info-icon">📍</span>
                    <div className="info-content">
                      <strong>Ubicación</strong>
                      <span>Santiago, Chile</span>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <span className="info-icon">⏰</span>
                    <div className="info-content">
                      <strong>Horario</strong>
                      <span>Lun - Vie: 9:00 - 18:00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Checklist */}
              <div className="sidebar-card highlight">
                <h3>📥 Descarga Gratis</h3>
                <p>Checklist de evaluación UX para tu producto</p>
                <button className="btn btn-white btn-block">
                  Descargar PDF
                </button>
                <p className="download-note">
                  20 puntos clave para evaluar la usabilidad de tu producto
                </p>
              </div>

              {/* Social Proof */}
              <div className="sidebar-card">
                <h3>⭐ Lo que dicen nuestros clientes</h3>
                <div className="mini-testimonial">
                  <p>"Respondieron en menos de 2 horas y agendamos una demo para el día siguiente. Muy profesionales."</p>
                  <strong>- Carlos M., Product Manager</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-faq">
        <div className="container">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>¿Cuánto tiempo toma obtener una cotización?</h4>
              <p>Respondemos todas las solicitudes en menos de 24 horas hábiles. Si necesitas una respuesta urgente, llámanos directamente.</p>
            </div>
            <div className="faq-item">
              <h4>¿La demo es realmente gratuita?</h4>
              <p>Sí, completamente. Es una videollamada de 30 minutos sin compromiso donde revisamos tu caso y te orientamos.</p>
            </div>
            <div className="faq-item">
              <h4>¿Trabajan con startups?</h4>
              <p>¡Absolutamente! Tenemos paquetes especiales para startups early-stage con presupuestos más ajustados.</p>
            </div>
            <div className="faq-item">
              <h4>¿Ofrecen descuentos por volumen?</h4>
              <p>Sí, si planeas múltiples proyectos o estudios longitudinales, podemos ofrecerte descuentos especiales.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
