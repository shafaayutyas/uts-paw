import useKoleksi from '../hooks/useKoleksi.js'
import '../styles/Statistik.css'

export default function Statistik() {
    const { items } = useKoleksi()
    const perKategori = items.reduce((hitung, { kategori }) => ({ ...hitung, [kategori]: (hitung[kategori] ?? 0) + 1}), {})
    
    return (
        <section id="statistik" className='statistik'>
            <h2>Statistik</h2>
            <div className='row'>
                <div className='tabel-gulir'>
                <table className="tabel-data">
                    <thead>
                        <tr>
                            <th>Kategori</th>
                            <th>Jumlah</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(perKategori).map(([kategori, jumlah]) => (
                            <tr key={kategori}>
                                <td>{kategori}</td>
                                <td>{jumlah}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total</th>
                            <td>{items.length}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className='keterangan-statistik'>
                <h3>Keterangan statistik</h3>
                <p>Saat ini terdapat {items.length} koleksi tanaman di kebun kami</p>
                <p>Kami memiliki koleksi tanaman hias, tanaman rumput, sayuran dan juga buah-buahan</p>
                <p>Mari hijaukan bumi dengan reboisasi🌱</p>
            </div>
            </div>
        </section>
    )
}