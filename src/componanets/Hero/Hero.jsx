import Button from "../Button/Button";
import Text from "../Text/Text";
import './Herostyle.css';
function Hero() {
  const btn = "Download Your Free Version";
  const data =[
    {
      title: "The modren landing page for",
      title2: "React developer" ,
      descrabtion:  "The easiest way to build React landing page in seconds."
    }
  ];
  return (
    <div className="hero">
        <Text data={data} />
        <Button btn={btn} />
    </div>
  )
}

export default Hero