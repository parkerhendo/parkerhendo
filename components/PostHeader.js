export default function PostHeader({title, author, date}) {
  return (
    <div className='block'>
      <h1 className="title-lg">{title}</h1>
      <h3 className="title-sm author">{author.name} · {date}</h3>
    </div>
  )
}