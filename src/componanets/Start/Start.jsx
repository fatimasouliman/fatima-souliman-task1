import './Startstyle.css';
import Text from '../Text/Text';
import Button from '../Button/Button';

function Start() {
    const text = [
        {
            title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            title2: "Start your free trial"
        }
    ];
    const btn = "Get Started";

  return (
    <div className='start'>
        <Text data={text} />
        <Button btn={btn} />
    </div>
  )
}

export default Start