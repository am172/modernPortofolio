import { Link } from 'react-scroll'
import Logo from '../../components/Logo'
import SocialHandels from '../../components/SocialHandels'
import { footer } from '../../source'
import './footer.css'

const index = () => {
    return (
        <footer id='footer'>
            <div className="spotlighy"/>
            <div className="container">
                <div className="grid">
                    <div className="cols-2 column">
                        <Logo/>
                        <p className="text__muted description">
                        Building responsive, high-performance full-stack web applications 🌐 with clean code 💻 and a user-focused approach 👥. Let’s create something amazing together 🚀.                        </p>
                        <SocialHandels/>
                    </div>
                    {footer.map((list,index) =>(
                        <div className="column" key={index}>
                            <h3 className="group__name">
                                {list.group}
                            </h3>
                            <div className="routes__container">
                                {
                                    list?.routes.map((route:any, index:number)=> (
                                        <Link to={route?.id} className='route__item' smooth={true} key={index}>{route.name}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
                    <article className='copyright'>
                        <h3>Copyright &copy; 2025 Amr Roshdy. All rights reserved.</h3>
                        <p className="text__muted">
                        Built with love by Amr Roshdy
                        </p>
                    </article>
            </div>
        </footer>
    )
}

export default index
