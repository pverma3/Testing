import type { ReactNode } from 'react'

interface CardProps {
  title: string
  subtitle?: string
  onClick?: () => void
  children?: ReactNode
}

export default function Card({ title, subtitle, onClick, children }: CardProps) {
  return (
    <div className="card" onClick={onClick} role={onClick ? 'button' : undefined}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </div>
      {children && <div className="card-body">{children}</div>}
    </div>
  )
}