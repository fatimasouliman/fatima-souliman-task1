import './Imgstyle.css';

function Img({image}) {
  return (
    <div className='img'>
        <img  src={image}/>
    </div>
  )
}

export default Img