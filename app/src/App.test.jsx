import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App.jsx'


// Contoh test. Tambahkan minimal 5 test buatan sendiri (butir rubrik F1).
test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

test('halaman beranda menampilkan judul', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
})

test('halaman tentang menampilkan nama yang sesuai', () => {
  render(
    <MemoryRouter initialEntries={['/tentang']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByText('SHAFA AYUTYAS DEWI',)).toBeInTheDocument()
})

test('halaman tentang menampilkan nim yang sesuai', () => {
  render(
    <MemoryRouter initialEntries={['/tentang']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByText('124140168')).toBeInTheDocument()
})

test('halaman tentang menampilkan tema yang sesuai', () => {
  render(
    <MemoryRouter initialEntries={['/tentang']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByText('Koleksi Tanaman Hias')).toBeInTheDocument()
})

test('halaman tambah menampilkan form', () => {
  render(
    <MemoryRouter initialEntries={['/tambah']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('form'), {name: 'formulir-tambah'}).toBeInTheDocument()
})

