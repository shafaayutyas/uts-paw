import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
    return (
        <div className="kerangka">
            <header className="kepala">
                <nav className="navbar">
                <a href="#" className="navbar-logo">Green<span>home</span>.</a>
                    <div className="navbar-nav">
                        <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        Beranda
                        </NavLink>
                        <NavLink to="/koleksi" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        Koleksi
                        </NavLink>
                        <NavLink to="/tambah" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        Tambah
                        </NavLink>
                        <NavLink to="/statistik" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        Statistik
                        </NavLink>
                        <NavLink to="/tentang" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                        Tentang
                        </NavLink>
                    </div>  
                </nav>
            </header>
            <main className="isi">
                <Outlet />
            </main>
            <footer>
                <a className="footer-text">Shafa Ayutyas Dewi | 124140168 | RB | UTS-PAW</a>
            </footer>
        </div>
    )
}