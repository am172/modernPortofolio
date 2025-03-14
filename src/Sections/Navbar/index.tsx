import './Navbar.css'
import Logo from '../../components/Logo'
import { navigation } from '../../source'
import { Link } from 'react-scroll'
import ThemeToggle from '../../components/ThemeToggle'
import {TiThMenu} from 'react-icons/ti'
import Sidebar from '../../components/Sidebar'
import { useState } from 'react'
import useNavbar from '../../hook/UseNavbar'
const Navbar = () => {
    const {showNavbar} = useNavbar();
    const [openSidebar, setOpenSider] = useState(false);
    return (
        <>
        <Sidebar
        openSidebar={openSidebar}
        onClose={()=> setOpenSider(!openSidebar)}
        />
        <nav id='navbar' className={`flex__center ${showNavbar ? "drop" : ""}`}>
            <Logo />
            <div className='flex nav__routes'>
                {
                    navigation.map((list: any, index: any) => (
                        <Link to={list.id}
                            smooth={true}
                            spy={true}
                            offset={-50}
                            className='route'
                            activeClass='active'
                            key={index}
                        >{list.name}</Link>
                    ))
                }
            </div>
            <div className="flex__center">
                <ThemeToggle />
                <div 
                className="icon__container menu__btn"
                onClick={()=> setOpenSider(!openSidebar)}

                >
                    <TiThMenu />
                </div>
            </div>
        </nav>
        </>
        
    )
}

export default Navbar
