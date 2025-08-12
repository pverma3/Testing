declare module 'react-force-graph-2d' {
  import type { ComponentType } from 'react'
  export interface ForceGraphMethods {
    zoomToFit: (ms?: number, px?: number, nodeFilter?: (node: any) => boolean) => void
    centerAt: (x?: number, y?: number, ms?: number) => void
  }
  const ForceGraph2D: ComponentType<any>
  export default ForceGraph2D
}