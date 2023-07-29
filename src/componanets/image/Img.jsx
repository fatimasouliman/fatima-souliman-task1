import './Imgstyle.css';
import {useEffect} from 'react';
import AOS from 'aos'
import '../../../node_modules/aos/dist/aos.css';

function Img({image , move}) {
    useEffect(() => {
      AOS.init({duration: 2000});
  }, []);
  return (
    <div className='img' data-aos={move}>
        <img  src={image}/>
    </div>
  )
}

export default Img