import './Liststyle.css';

function List({list}) {
  return (
    <div>
        <ul className='list'>
            {
              list.map(link => 
                <li>{link}</li>
                )
            }
            
        </ul>
    </div>
  )
}

export default List