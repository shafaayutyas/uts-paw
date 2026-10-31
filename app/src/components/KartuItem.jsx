import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
    const { id, judul, kategori, namaLatin } = item
    return (
        <article className="kartu">
            <h3>
                <Link to={`/koleksi/${id}`}>{judul}</Link>
            </h3>
            <p>
                {namaLatin}
            </p>
            <p>
                Kategori: {kategori} 
            </p>
        </article>
    )
}