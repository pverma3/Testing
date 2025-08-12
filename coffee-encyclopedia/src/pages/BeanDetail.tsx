import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { beans } from '../data/beans'
import { coffees } from '../data/coffees'
import Tag from '../components/Tag'

export default function BeanDetail() {
  const { id } = useParams<{ id: string }>()
  const bean = useMemo(() => beans.find(b => b.id === id), [id])

  if (!bean) {
    return <p>Not found.</p>
  }

  const matchingCoffees = coffees.filter(c => c.beanRecommendations.includes(bean.id))

  return (
    <article>
      <h1>{bean.name}</h1>
      <p><strong>Species:</strong> {bean.species}</p>
      <p><strong>Origin:</strong> {bean.originCountries.join(', ')}</p>
      <p><strong>Processing:</strong> {bean.processingMethods.join(', ')}</p>
      <p><strong>Roast suitability:</strong> {bean.roastSuitability.join(', ')}</p>

      <h3>Flavor Notes</h3>
      <div className="tags">
        {bean.flavorNotes.map(n => <Tag key={n} text={n} />)}
      </div>

      <h3>Great in</h3>
      <ul>
        {matchingCoffees.map(c => (
          <li key={c.id}><Link to={`/coffees/${c.id}`}>{c.name}</Link></li>
        ))}
      </ul>
    </article>
  )
}