// import { FaStar } from 'react-icons/fa'
import { testimonies } from '../../source'
import './Testimonalis.css'
import  'swiper/css'
import {Autoplay} from 'swiper/modules'
import {SwiperOptions} from 'swiper/types'
import {Swiper, SwiperSlide} from 'swiper/react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
const Testimonalis = () => {
    const setting:SwiperOptions = {
        slidesPerView:1,
        spaceBetween:30,
        autoplay:true,
        loop:true,
        speed:5000,
        centeredSlides:true,
        modules:[Autoplay],
        breakpoints:{
            600:{
                slidesPerView:"auto",
            }
        }
        
    }

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
            .from(".section__header .sub__title",{ opacity: 0, x: -30}
            )
            .from(".testimonail", {opacity:0, y:30, stagger:0.5});
    }, { scope: container })
    return (
        <section id='testimonails' ref={container}>
            <div className="section__header">
                <h2 className="sub__title">
                My <span className="primary">Tech Inspirations</span> 
                </h2>
            </div>
            <Swiper {...setting} className='testimonails'>
                {
                    testimonies.map((list,index)=> (
                        <SwiperSlide className='testimonail' key={index}>
                            <div className="flex user">
                                <div className="profile">
                                    <img src={list.profile} alt={list.name} />
                                </div>
                                <div className="details">
                                    <h3 className="name">{list.name}</h3>
                                    <div className="flex row">
                                        <p className="text__muted position">{list.position}</p>
                                        <p className="primary company">{list.company}</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text__muted content">{list.content}</p>
                            <div className="flex__center stars__container">
                                {/* <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/> */}
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            
        </section>
    )
}

export default Testimonalis

