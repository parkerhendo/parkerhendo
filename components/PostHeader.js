export default function PostHeader({ title, date }) {
  return (
    <div className='post-header'>
      <div className='post-header-group'>
        <h1 className='title-lg'>{title}</h1>
        <h3 className='title-sm date'>{date}</h3>
      </div>
      <hr className='post-header-line' />
    </div>
  );
}
