import useKoleksi from '../hooks/useKoleksi.js'
import '../styles/Statistik.css'
import KeteranganStatistik from '../components/KeteranganStatistik.jsx'

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
            <KeteranganStatistik banyakKoleksi={items.length} />
            </div>
        </section>
    )
}