export default function KotakPencarian({ nilai, onUbah }) {
    return (
        <input 
            type="search"
            placeholder="Cari tanaman.."
            aria-label="Cari tanaman"
            value={nilai}
            onChange={(e) => onUbah(e.target.value)}
        />
    )
}