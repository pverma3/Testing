export type RoastLevel = 'light' | 'medium' | 'dark'
export type Species = 'Arabica' | 'Robusta' | 'Liberica' | 'Excelsa'

export interface Bean {
  id: string
  name: string
  species: Species
  originCountries: string[]
  processingMethods: string[]
  flavorNotes: string[]
  roastSuitability: RoastLevel[]
}

export interface Ingredient {
  item: string
  amount?: string
}

export interface CoffeeDrink {
  id: string
  name: string
  description: string
  base: 'espresso' | 'filter' | 'cold brew'
  brewMethod: string
  ingredients: Ingredient[]
  beanRecommendations: string[]
  tags: string[]
}

export interface GraphNode {
  id: string
  label: string
  type: 'coffee' | 'bean' | 'origin' | 'method' | 'note' | 'species'
  group: number
}

export interface GraphLink {
  source: string
  target: string
  relation: string
}

export interface GraphData {
  nodes: GraphNode[]
  links: GraphLink[]
}