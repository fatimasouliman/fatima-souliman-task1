import Text from "../../componanets/Text/Text";
import Img from "../../componanets/image/Img";
import Titles from "../../componanets/titles/Titles";
import './Yourstyle.css';
import img1 from './../../images/img-1.PNG';
import img2 from './../../images/img-2.PNG';
import img3 from './../../images/img-3.PNG';
import Start from "../../componanets/Start/Start";

function Yourtitle() {
    const text1 = [
        {
            title: "Your title here",
            descrabtion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minima vero, Accusantium minima vero, ea nisi harum aperiam at"
        }

    ]
  return (
    <div className="yourtitle">
        <Text data={text1} />
        <Titles image={img1}/>
        <div className="titles">
            <Img image={img2} />
            <Text data={text1} />
        </div>
        <Titles image={img3}/>
        <Start />
    </div>
  )
}

export default Yourtitle