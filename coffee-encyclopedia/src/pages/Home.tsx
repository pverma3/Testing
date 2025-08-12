import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="home">
      <h1>Coffee Encyclopedia</h1>
      <p>Explore coffee drinks, beans, origins, and how they all connect.</p>
      <div className="grid">
        <Link to="/encyclopedia" className="tile">
          <h3>Encyclopedia →</h3>
          <p>Browse drinks and beans, with details and recommendations.</p>
        </Link>
        <Link to="/graph" className="tile">
          <h3>Knowledge Graph →</h3>
          <p>Visualize relationships between coffees, beans, methods, and notes.</p>
        </Link>
      </div>
    </section>
  )
}