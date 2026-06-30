import { useState } from 'react'
import { Button } from 'react-bootstrap'
import '../styles/Form.css'

type ContactValues = {
  name: string
  email: string
  phone: string
  message: string
}

type ContactProps = {
  initialValues?: ContactValues
  onSubmit?: (values: ContactValues) => void
}

export default function Contact({
  initialValues = { name: '', email: '', phone: '', message: '' },
  onSubmit,
}: ContactProps) {
  const [formValues, setFormValues] = useState<ContactValues>(initialValues)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    const fieldName = name as keyof ContactValues
    console.log('Contact input changed:', { fieldName, value })

    setFormValues((currentValues) => ({
      ...currentValues,
      [fieldName]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Contact form submitted:', formValues)

    if (onSubmit) {
      onSubmit(formValues)
    }

    setFormValues(initialValues)
  }

  const handleReset = () => {
    console.log('Contact form reset')
    setFormValues(initialValues)
  }

  return (
    <section className="contact-shell">
      <h1>Formulario</h1>
      <p className="contact-subtitle">Escríbenos y te responderemos pronto.</p>
      <form className="contact-form" onSubmit={handleSubmit} onReset={handleReset}>
        <label>
          Nombre
          <input
            name="name"
            value={formValues.name}
            onChange={handleChange}
            type="text"
            placeholder="Tu nombre"
          />
        </label>

        <label>
          Email
          <input
            name="email"
            value={formValues.email}
            onChange={handleChange}
            type="email"
            placeholder="tu@email.com"
          />
        </label>

        <label>
          Teléfono
          <input
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            type="tel"
            placeholder="123456789"
          />
        </label>

        <label>
          Mensaje
          <textarea
            name="message"
            value={formValues.message}
            onChange={handleChange}
            rows={5}
            placeholder="Cuéntanos en qué te podemos ayudar"
          />
        </label>

        <div className="contact-actions">
          <Button variant="secondary" type="reset">
            Limpiar
          </Button>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </div>
      </form>
    </section>
  )
}
