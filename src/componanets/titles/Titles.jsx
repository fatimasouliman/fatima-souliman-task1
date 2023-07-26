import './Titlesstyle.css';
import Img from '../image/Img';
import Text from './../Text/Text';
function Titles({image}) {
    const text2 = [
        {
            title: "Your title here",
            descrabtion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam facilis sit, nostrum quas deleniti magni omnis neque odio earum corrupti aperiam. Quibusdam deleniti minus velit dolorem rem corporis. Enim, doloribus?"
        }
    ]
  return (
    <div className='titles'>
        <Text data={text2} />
        <Img image={image} />
    </div>
  )
}

export default Titles