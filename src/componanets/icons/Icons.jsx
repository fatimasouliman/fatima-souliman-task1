import { AiFillGithub } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiAtSign } from 'react-icons/fi';
import { AiOutlineWifi } from 'react-icons/ai';
import List from '../List/List';


function Icons() {
    const icons = [
        <AiFillGithub />,
        <AiFillFacebook />,
        <AiOutlineTwitter />,
        <AiFillYoutube />,
        <AiFillLinkedin />,
        <FiAtSign />,
        <AiOutlineWifi />
    ]
  return (
    <div className='icons'>
        <List list={icons} />
    </div>
  )
}

export default Icons