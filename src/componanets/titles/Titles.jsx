import './Titlesstyle.css';
import Text from '../Text/Text';
import Img from '../image/Img';

function Titles({image}) {
    const text2 = [
        {
            title: "Your title here",
            descrabtion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam facilis sit, nostrum quas deleniti magni omnis neque odio earum corrupti aperiam. Quibusdam deleniti minus velit dolorem rem corporis. Enim, doloribus?"
        }
    ]
  return (
    <div className='titles'>
        <Text data={text2} move="fade-right"/>
        <Img image={image} move="fade-left"/>
    </div>
  )
}

export default Titles