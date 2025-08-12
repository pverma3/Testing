interface TagProps {
  text: string
}

export default function Tag({ text }: TagProps) {
  return <span className="tag">{text}</span>
}