import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { coffees } from '../data/coffees'
import { beans } from '../data/beans'
import Tag from '../components/Tag'

export default function CoffeeDetail() {
  const { id } = useParams<{ id: string }>()
  const coffee = useMemo(() => coffees.find(c => c.id === id), [id])

  if (!coffee) {
    return <p>Not found.</p>
  }

  const recommendedBeans = beans.filter(b => coffee.beanRecommendations.includes(b.id))

  return (
    <article>
      <h1>{coffee.name}</h1>
      <p>{coffee.description}</p>
      <p><strong>Brew method:</strong> {coffee.brewMethod}</p>
      <h3>Ingredients</h3>
      <ul>
        {coffee.ingredients.map((ing, idx) => (
          <li key={idx}>{ing.item}{ing.amount ? ` — ${ing.amount}` : ''}</li>
        ))}
      </ul>
      <div className="tags">
        {coffee.tags.map(t => <Tag key={t} text={t} />)}
      </div>

      <h3>Recommended Beans</h3>
      <ul>
        {recommendedBeans.map(b => (
          <li key={b.id}><Link to={`/beans/${b.id}`}>{b.name}</Link> ({b.species})</li>
        ))}
      </ul>
    </article>
  )
}