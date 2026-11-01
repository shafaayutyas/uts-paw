import {Link } from 'react-router-dom'
import '../styles/Tentang.css'

export default function TidakDitemukan() {
    return (
        <section id='tentang'>
            <h1>404</h1>
        <p>Halaman tidak ditemukan</p>
        <Link to="/">Kembali ke beranda</Link>
        </section>
    )
}