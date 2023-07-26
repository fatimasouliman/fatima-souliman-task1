import './Textstyle.css';

function Text({data}) {
    console.log(data);
  return (
    <div className='text'>
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