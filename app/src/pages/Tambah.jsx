import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi'
import '../styles/Tambah.css'

const AWAL = { judul: '', kategori: 'Tanaman Hias', namaLatin: '', frekuensiSiram:'', kebutuhanCahaya: 'sedang'}

export default function Tambah() {
    const { tambah } = useKoleksi()
    const navigate = useNavigate()
    const [form, setForm] = useState(AWAL)
    const [galat, setGalat] = useState('')

    const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const simpan = (e) => {
        e.preventDefault()
        if (form.judul.trim().length < 3 || !form.judul.trim()) {
            setGalat('Judul wajib diisi, minimal 3 karakter!')
            return
        }
        tambah({ ...form, judul: form.judul.trim() })
        navigate('/koleksi')
    }

    return (
        <form className="formulir" onSubmit={simpan} noValidate>
            <h1>Tambah Koleksi Tanaman</h1>

            <label htmlFor="judul">Judul</label>
            <input id="judul" name="judul" type="text" value={form.judul} onChange={ubah} />
            {galat && <p role="alert">{galat}</p>}

            <label htmlFor="kategori">Kategori</label>
            <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
                <option>Tanaman Hias</option>
                <option>Tanaman Keras</option>
                <option>Tanaman Buah</option>
                <option>Sayuran</option>
            </select>

            <label htmlFor="namaLatin">Nama Latin</label>
            <input id="namaLatin" name="namaLatin" type="text" value={form.namaLatin} onChange={ubah} />

            <label htmlFor="frekuensiSiram">Frekuensi Siram</label>
            <input id="frekuensiSiram" name="frekuensiSiram" type="text" value={form.frekuensiSiram} onChange={ubah} />

            <label htmlFor="kebutuhanCahaya">Kebutuhan Cahaya</label>
            <select id="kebutuhanCahaya" name="kebutuhanCahaya" value={form.kebutuhanCahaya} onChange={ubah}>
                <option>penuh</option>
                <option>teduh</option>
                <option>sedang</option>
            </select>

            <button type="submit">Simpan</button>
        </form>
    )
}
