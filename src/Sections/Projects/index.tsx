import { FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../../source'
import './project.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);


const Projects = () => {
    const container: any = useRef();
    useGSAP(() => {
        gsap.timeline({
            delay: 0.5,
            scrollTrigger: {
                trigger: container.current,
                start: "20% bottom",
                end: "bottom top",
            }
        })
            .from([".section__header .sub__title", ".section__header .decription"],
                { opacity: 0, y: 30, stagger: 0.5 }
            )
            .from(".project", { opacity: 0, y: 30, stagger: 0.5 });
    }, { scope: container })
    return (
        <section id='projects' ref={container}>
            <div className="container">
                <div className="section__header">
                    <h1 className="sub__title">My Recent Projects</h1>
                    <p className="description">Explore my latest work, blending creativity and code for functional, responsive websites with clean design and seamless user experiences.</p>
                </div>
                <div className="projects">
                    {projects.map((project, index) => (
                        <div className="flex project" key={index}>
                            <Link to={`/project/${project.id}`} className="picture">
                                <img src={project.image} alt={project.name} />
                            </Link>

                            <div className="flex details">
                                <h3 className="name line__clamp__1">{project.name}</h3>
                                <p className="text__muted description line__clamp__4">{project.description}</p>
                                <div className="flex bottom">
                                    <Link to={`/project/${project.id}`} className="flex__container btn">
                                        <FaExternalLinkAlt />Show Details
                                    </Link>
                                    {/* <a href={project.url} target='_blank' className='flex__container btn'>
                                        <FaExternalLinkAlt />view Demo
                                    </a> */}
                                    <a href={project.url1} target='_blank' className='flex__container btn'>
                                        <FaExternalLinkAlt />Github
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Projects

