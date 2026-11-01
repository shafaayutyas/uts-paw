import { Link, useNavigate, useParams } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import '../styles/Detail.css'
import IlustrasiKategori from '../components/IlustrasiKategori.jsx'

export default function Detail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { items, loading, hapus } = useKoleksi()
    const item = items.find((i) => String(i.id) === id)

    if (loading){
        return <p>Memuat data...</p>
    }
    if (!item) {
        return (
           <section>
                <h1>Tanaman tidak ditemukan</h1>
                <Link to="/koleksi">Lihat Koleksi Kembali</Link>
           </section> 
        )
    }

    const konfirmasiHapus = () => {
        if (window.confirm(`Hapus "${item.judul}"?`)) {
            hapus(item.id)
            navigate('/koleksi')
        }
    }

    return (
        <section id="detail" className="detail">
            <h2><span>Detail</span> Informasi</h2>
            
            <div className='row'>
                <div className='content'>
                    <h3>{item.judul}</h3>
                    <dl>
                        <dt>Kategori :</dt>
                        <dd>{item.kategori}</dd>
                        <dt>Nama Latin :</dt>
                        <dd>{item.namaLatin}</dd>
                        <dt>Frekuensi Siram :</dt>
                        <dd>{item.frekuensiSiram}</dd>
                        <dt>Kebutuhan Cahaya :</dt>
                        <dd>{item.kebutuhanCahaya}</dd>
                    </dl>
                    <Link to="/koleksi" className='tombol'>Kembali</Link>
                    <button type="button" onClick={konfirmasiHapus} className='tombol'>
                        Hapus koleksi
                    </button>
                </div>
                <div className='ilustrasi'>
                    <IlustrasiKategori itemKategori={item.kategori} />
                </div>
            </div>
        </section>
    )
}