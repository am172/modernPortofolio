import { Link } from 'react-scroll'
import { amr } from '../../assets'
import SocialHandels from '../../components/SocialHandels'
import './Header.css'
import Points from '../../components/Points'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
const Header = () => {
    const container: any = useRef();
    useGSAP(() => {
        gsap.timeline({ delay: 0.3 })
            .from("points", { opacity: 0, y: -30 })
            .from(".me", { opacity: 0, scale: 0.7 })
            .from([".user__info .sub__title", ".user__info .description"],
                { opacity: 0, y: 20 })
            .from(".user__info .title", { opacity: 0, x: -30 })
            .from(".user__info .bottons", { opacity: 0, y: -30 })
            .from(".points .point", { opacity: 0, y: -30, stagger: 0.5 })
    }, { scope: container })
    return (
        <section id='header' className='bg__secondary' ref={container}>
            <div className="spotlight"></div>
            <div className="container">
                <div className="grid">
                    <div className="me">
                        <img src={amr} alt="" />
                    </div>
                    <div className="user__info">
                        <h2 className="sub__title">Hi 👋, I'm Amr</h2>
                        <h1 className="title">Full-stack Dveloper</h1>
                        <p className="description">
                            I'm Amr Roshdy, a passionate MERN Stack Developer and Computer Science student at Beni Suef University. I love solving problems, optimizing performance, and creating user-friendly digital solutions.                        </p>
                        <div className="flex buttons">
                            <SocialHandels />
                            <Link to='contact' smooth={true} className='btn btn__primary'>
                                Contact Me
                            </Link>
                            <a
                                className="btn btn__primary"
                                href="/CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                    <Points />
                </div>
            </div>
        </section>
    )
}

export default Header
