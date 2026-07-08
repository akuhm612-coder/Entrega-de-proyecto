import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

describe('App routes', () => {
  it('renders the catalog page when navigating to /catalogo', () => {
    render(
      <MemoryRouter initialEntries={['/catalogo']}>
        <App />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: /catálogo/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /nuevos/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /de tela/i })).toBeInTheDocument()
  })
})
