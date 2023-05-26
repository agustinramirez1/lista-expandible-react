import React from 'react'
import Botones from '../Botones/Botones'

const Navbar = () => {

    const links = [
        { text: 'Products', url: '#' },
        { text: 'Resources', url: '#' },
        { text: 'About us', url: '#' },
        { text: 'Contact us', url: '#' }
    ]
    return (
        <nav className='navbar-tukp'>
            <div className='container navbar-flex'>
                <div>
                    <img src="https://res.cloudinary.com/dhzoxdo6q/image/upload/v1685025897/Roshka/react-white_hcr6av.png" height={50} />
                </div>

                <div className='links'>
                    <ul className='lista'>
                        {links && links.map((item, index) => (
                            <li key={index}>
                                <a href={item.url} className='link'> {item.text}</a>
                            </li>
                        ))}
                    </ul>


                </div>
                <div>
                    <Botones color={"white"} icon={'bi bi-person-fill'} text={"Login"} background={'transparent'} border={'transparent'} iconPosition={'start'} />
                    <Botones color={"rgb(0, 149, 224)"} text={"Book a Demo"} background={'white'} border={'transparent'}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar