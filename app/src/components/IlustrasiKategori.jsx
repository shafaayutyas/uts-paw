export default function IlustrasiKategori({itemKategori}) {
    const ilustrasi = {
        'Tanaman Hias': 'download (1.1).jpg',
        'Tanaman Buah': 'download (2).jpg',
        'Tanaman Keras': 'download (3).jpg',
        'Sayuran': 'download (4).jpg'
    }
    return (
        <img 
            src={`${import.meta.env.BASE_URL}images/${ilustrasi[itemKategori]}`} 
            alt={itemKategori}
        />
    )
}