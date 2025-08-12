import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Tag from '../components/Tag'
import { coffees } from '../data/coffees'
import { beans } from '../data/beans'

export default function Encyclopedia() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const filteredCoffees = useMemo(() => {
    const q = query.toLowerCase()
    return coffees.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.tags.some(t => t.toLowerCase().includes(q)) ||
      c.description.toLowerCase().includes(q)
    )
  }, [query])

  const filteredBeans = useMemo(() => {
    const q = query.toLowerCase()
    return beans.filter(b =>
      b.name.toLowerCase().includes(q) ||
      b.originCountries.some(o => o.toLowerCase().includes(q)) ||
      b.flavorNotes.some(n => n.toLowerCase().includes(q))
    )
  }, [query])

  return (
    <section>
      <h1>Encyclopedia</h1>
      <input
        className="search"
        placeholder="Search coffees, beans, notes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <h2>Coffees</h2>
      <div className="grid">
        {filteredCoffees.map(coffee => (
          <div key={coffee.id} className="clickable" onClick={() => navigate(`/coffees/${coffee.id}`)}>
            <Card title={coffee.name} subtitle={coffee.brewMethod}>
              <p>{coffee.description}</p>
              <div className="tags">
                {coffee.tags.map(t => <Tag key={t} text={t} />)}
              </div>
            </Card>
          </div>
        ))}
      </div>

      <h2>Beans</h2>
      <div className="grid">
        {filteredBeans.map(bean => (
          <div key={bean.id} className="clickable" onClick={() => navigate(`/beans/${bean.id}`)}>
            <Card title={bean.name} subtitle={`${bean.species} • ${bean.originCountries.join(', ')}`}>
              <div className="tags">
                {bean.flavorNotes.map(n => <Tag key={n} text={n} />)}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}