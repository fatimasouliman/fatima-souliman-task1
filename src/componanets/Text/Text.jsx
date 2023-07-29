import './Textstyle.css';
import {useEffect} from 'react';
import AOS from 'aos'
import '../../../node_modules/aos/dist/aos.css';

function Text({data , move}) {
    
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);
    
  return (
    <div className='text' data-aos={move}>
        {
            data.map(text =>
                <>
                    <h1>{text.title}</h1>
                    <h2>{text.title2}</h2>
                    <p>{text.descrabtion}</p>
                </>
                
            )
        }
        
    </div>
  )
}

export default Text