import { useContext } from "react"
import { KoleksiContext } from "../context/koleksiContext.js"

export default function useKoleksi() {
    const context = useContext(KoleksiContext)
    if (!context) {
        throw new Error('useKoleksi harus digunakan di dalam <KoleksiProvider>')
    } return context
}