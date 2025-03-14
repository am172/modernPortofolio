import Odometer from 'react-odometerjs'
import 'odometer/themes/odometer-theme-default.css';

import './Points.css'
import { useEffect, useState } from 'react'

const Points = () => {
    const [experience, setExperience] = useState(0);
    const [projects, setProjects] = useState(0);
    const[awards, setAwards] = useState(0);
    const[problems, setProblems] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(()=>{
            setExperience(1);
            setProjects(6);
            setAwards(2);
            setProblems(80);
        },4500)
        return () => clearTimeout(timeout);
    },[])

    return (
        <div className='points'>


            {/* POINT START */}
            <div className="point">
                <div className="spotlight"/>
                <div className="flex">
                    <Odometer value={experience} className='sub__title'/>
                    <h3 className="sub__title">+</h3>
                </div>
                <p className="text__muted">years of experience</p>
            </div>
            {/* POINT END */}

            {/* POINT START */}
            <div className="point">
                <div className="flex">
                    <Odometer value={projects} className='sub__title'/>
                    <h3 className="sub__title">+</h3>
                </div>
                <p className="text__muted">compeleted projects</p>
            </div>
            {/* POINT END */}

            {/* POINT START */}
            <div className="point">
                <div className="flex">
                    <Odometer value={awards} className='sub__title'/>
                    <h3 className="sub__title">🏆</h3>
                </div>
                <p className="text__muted">awards</p>
            </div>
            {/* POINT END */}
            
             {/* POINT START */}
             {/* client */}
             <div className="point">
                <div className="flex">
                    <Odometer value={problems} className='sub__title'/>
                    <h3 className="sub__title">+</h3>
                    <h3 className="sub__title">💡</h3>
                </div>
                <p className="text__muted">Problems Solved</p>
            </div>
            {/* POINT END */}
            

        </div>
    )
}

export default Points
