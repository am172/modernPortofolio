import { amr } from '../../assets'
import Grid from '../../assets/Grid'
import CardUi from '../../assets/CardUi'
import GridWireframe from '../../assets/GridWireFrame'
import Window from '../../assets/Window'
import CodeBlock from '../../components/CodeBlock'
import { techStack } from '../../source'
import { Link } from 'react-scroll'
import './About.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
const code = `
const developer = {
  firstName: 'Amr',
  lastName: 'Roshdy',
  hobbies: () => {
    // Eat 🥪, Sleep 💤, Code 💻
    // Play Football ⚽, Watch WWE and Waching movies(Tarantino Movies 🎬)
    // Chill with Friends 🧑‍🤝‍🧑 (Yes, I have friends… I think 😅)
    // ... I swear I have a life! 😅
    // ... and of course,Repeat ♻️ (because bugs don’t fix themselves...)
  },
  codeMode: () => {
    // When the coffee hits ☕, unleash the beast!
    while (true) {
      // eat();
      // sleep();
      // code();
      // repeat();
      break; // Relax... I do sleep 😂
    }
  },
   tarantinoQuote: () => {
    // "I’m gonna get medieval on your bugs!" 🔥
    console.log("Say 'console.log()' one more time... I dare you! 😎");
  },
  ultimateSkill: () => {
    // One-liner magic to prove I'm a coding wizard 🧙‍♂️👨‍💻😎😄
    return [...new Set('🧠💻⚡'.repeat(42))]
      .map((char, i) => i % 2 === 0 ? char.toUpperCase() : char)
      .join('');
  }
}

`


const About = () => {
    const container:any = useRef();
    useGSAP(()=> {
        gsap.timeline({
            delay:0.5,
            scrollTrigger:{
                trigger:container.current,
                start:"20% bottom",
                end:"bottom top",
            }
        })
        .from(".box", {opacity:0,y:30,stagger:0.5})
    },{scope:container})
    return (
        <section id='about' ref={container}>
            <div className="container grid">
                {/* {BOX START} */}
                <div className="spotlight" />
                <div className="cluster">
                    <div className="flex user">
                        <div className="profile">
                            <img src={amr} alt="" />
                        </div>
                        <div className="details">
                            <h4>amr roshdy</h4>
                            <p className="text__muted">
                                full stack developer
                            </p>
                        </div>
                    </div>
                    <h2 className="sub__title">
                        <span className="primary">Passionate</span> Developer
                    </h2>
                    <p className="description">
                        I adapt to different time zones to make sure communication is smooth, no matter where you're located.
                    </p>
                    <Window color='var(--color-primary-light)' className='kit window' />
                </div>
                {/* {BOX END} */}



                {/* {BOX START} */}
                <div className="col-2 box">
                    <div className="spotlight" />
                    <div className="flex row cluster">
                        <CodeBlock code={code} language='javascript' />
                        {/* <div className="my__drive">
                            <h2 className="sub__title">
                                What <span className="primary">Drives Me</span>
                            </h2>
                            <p className="description">
                                I’m passionate about the intersection of design 🎨 and
                                development 💻. I believe the best digital experiences are built
                                with a deep understanding of the user 👤 and a commitment to
                                innovation 🌟. Whether working on a simple landing page or a
                                complex web app, I bring precision 🎯, creativity ✨, and a
                                user-first mindset to every project.
                            </p>
                        </div> */}
                    </div>
                    <GridWireframe
                        width={"90%"}
                        height={"auto"}
                        color='var(--color-primary-light)'
                        className='kit grid__wireframe'

                    />
                </div>
                {/* BOX END */}

                {/* BOX START */}
                <div className="col-2 box">
                    <div className="cluster">
                        <div className="column">
                            <h2 className="sub__title">
                                My <span className="primary">Tech Stack</span>
                            </h2>
                            <p className="description">Always Evolving My Tech Stack</p>
                        </div>
                        <div className="column stacks__container">
                            {techStack.map((stack, index) => (
                                <div
                                    className="flex__center btn stack"
                                    key={index}
                                    style={{
                                        border: '1px solid #a780ff',
                                        // boxShadow: '0 0 5px rgba(167, 128, 255, 0.5)',
                                        backgroundColor: 'rgba(36, 3, 45, 0.12)',
                                    }}
                                >
                                    {stack.icon}
                                    {stack.name}
                                </div>
                            ))}
                        </div>

                    </div>
                    <Grid className='kit grid__box' />
                    <CardUi className='kit card_ui' color='gray' background='rgba(var(--bg-base-rgb),05)' />
                </div>
                {/* BOX END */}
                {/* BOX START */}
                <div className="box flex__center last__box">
                    <div className="cluster">
                        <h2 className="text__white sub__title"> I'm Committed to Collaboration and Clear </h2>
                        <div className="flex__center btn__wrapper">
                            <Link to='contact' smooth={true} className='btn'>
                                Let's Collaporate
                            </Link>
                        </div>
                    </div>
                </div>

                {/* BOX END */}
            </div>
        </section>
    )
}

export default About
