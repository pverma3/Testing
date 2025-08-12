import { beans } from './beans'
import { coffees } from './coffees'
import type { GraphData, GraphNode, GraphLink } from '../types'

const nodes: GraphNode[] = []
const links: GraphLink[] = []

// Add bean nodes
for (const bean of beans) {
  nodes.push({ id: bean.id, label: bean.name, type: 'bean', group: 1 })
  nodes.push({ id: `species:${bean.species}`, label: bean.species, type: 'species', group: 5 })
  links.push({ source: bean.id, target: `species:${bean.species}`, relation: 'is' })
  for (const origin of bean.originCountries) {
    const originId = `origin:${origin}`
    if (!nodes.find(n => n.id === originId)) {
      nodes.push({ id: originId, label: origin, type: 'origin', group: 2 })
    }
    links.push({ source: bean.id, target: originId, relation: 'origin' })
  }
  for (const note of bean.flavorNotes) {
    const noteId = `note:${note}`
    if (!nodes.find(n => n.id === noteId)) {
      nodes.push({ id: noteId, label: note, type: 'note', group: 6 })
    }
    links.push({ source: bean.id, target: noteId, relation: 'note' })
  }
}

// Add coffee nodes and relations
for (const coffee of coffees) {
  nodes.push({ id: coffee.id, label: coffee.name, type: 'coffee', group: 0 })
  const methodId = `method:${coffee.brewMethod}`
  if (!nodes.find(n => n.id === methodId)) {
    nodes.push({ id: methodId, label: coffee.brewMethod, type: 'method', group: 3 })
  }
  links.push({ source: coffee.id, target: methodId, relation: 'brewed-with' })
  for (const beanId of coffee.beanRecommendations) {
    links.push({ source: coffee.id, target: beanId, relation: 'recommends' })
  }
  for (const tag of coffee.tags) {
    const noteId = `note:${tag}`
    if (!nodes.find(n => n.id === noteId)) {
      nodes.push({ id: noteId, label: tag, type: 'note', group: 6 })
    }
    links.push({ source: coffee.id, target: noteId, relation: 'tag' })
  }
}

export const graphData: GraphData = { nodes, links }