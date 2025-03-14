import './SocialHandels.css'
import { socialHandles } from '../../source'
const SocialHandels = () => {
    return (
        <div className='flex social__handels'>
            {
                socialHandles.map((handle, index) => (
                    <a
                        href={handle.link}
                        target='_blank'
                        className='icon__container handle' 
                        style={{ marginRight: "2px" }} 
                        key={index}
                    >{handle.icon}</a>
                ))
            }
        </div>
    )
}

export default SocialHandels
