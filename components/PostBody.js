export default function PostBody({content}) {
  return (
    <div className='block'>
      <div className="body-lg" dangerouslySetInnerHTML={{__html: content}} />
    </div>
  )
}