import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">Coffee Encyclopedia</Link>
      <nav className="nav-links">
        <NavLink to="/encyclopedia" className={({ isActive }) => isActive ? 'active' : undefined}>Encyclopedia</NavLink>
        <NavLink to="/graph" className={({ isActive }) => isActive ? 'active' : undefined}>Knowledge Graph</NavLink>
      </nav>
    </header>
  )
}