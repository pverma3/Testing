import { useEffect, useRef } from 'react'
import ForceGraph2D from 'react-force-graph-2d'
import type { ForceGraphMethods } from 'react-force-graph-2d'
import { useNavigate } from 'react-router-dom'
import { graphData } from '../data/graph'
import type { GraphNode } from '../types'

export default function Graph() {
  const navigate = useNavigate()
  const fgRef = useRef<ForceGraphMethods | null>(null)

  useEffect(() => {
    fgRef.current?.zoomToFit(400)
  }, [])

  return (
    <section style={{ height: '75vh' }}>
      <h1>Knowledge Graph</h1>
      <ForceGraph2D
        ref={fgRef as any}
        graphData={graphData}
        linkDirectionalArrowLength={6}
        backgroundColor="#0b0b0b"
        linkColor={() => 'rgba(255,255,255,0.25)'}
        nodeLabel={(n: any) => (n as GraphNode).label}
        nodeRelSize={6}
        onNodeClick={(node: any) => {
          const n = node as GraphNode
          if (n.type === 'coffee') navigate(`/coffees/${n.id}`)
          if (n.type === 'bean') navigate(`/beans/${n.id}`)
        }}
        nodeCanvasObject={(node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
          const n = node as GraphNode
          const label = n.label
          const fontSize = 12 / Math.sqrt(globalScale)
          ctx.font = `${fontSize}px Sans-Serif`
          const color = n.type === 'coffee' ? '#ffb703' : n.type === 'bean' ? '#8ecae6' : n.type === 'origin' ? '#95d5b2' : n.type === 'method' ? '#f4a261' : '#cdb4db'
          ctx.fillStyle = color
          ctx.beginPath()
          ctx.arc((node as any).x, (node as any).y, 6, 0, 2 * Math.PI, false)
          ctx.fill()
          ctx.fillStyle = '#ffffff'
          ctx.fillText(label, (node as any).x + 8, (node as any).y + 3)
        }}
      />
    </section>
  )
}