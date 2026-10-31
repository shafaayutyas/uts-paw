import mahasiswa from '../../mahasiswa.json'
import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import '../styles/Beranda.css'

export default function Beranda() {
    const { items, loading } = useKoleksi()
    const jumlahKategori = new Set(items.map((item) => item.kategori)).size
    
    return (
        <section className="hero" id="home">
            <main className="content">
                <h1>Beranda <span>Tanaman Hias</span></h1>
                <p>Dibangun oleh: {mahasiswa.nama}</p>
                <p>Tema: {mahasiswa.tema}</p>
                {loading ? (<p>Membuat ringkasan...</p>) : (<p>Saat ini terdapat {items.length} koleksi dalam {jumlahKategori} kategori</p>)}
                <Link to="/koleksi" className="cta">Lihat Koleksi</Link>
                <Link to="/tentang" className="cta">Tentang Kami</Link>
            </main>
        </section>
    )
}