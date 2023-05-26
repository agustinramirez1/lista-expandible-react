import React from 'react'
import Botones from '../Botones/Botones'

const Footer = () => {
    let contenido =
        [
            { "title": "Products", "body": ['ICM', 'DMS', 'CRM'] },
            { "title": "Resources", "body": ['Case Studies', "FAQ's", 'Newsletter', 'Release Notes', "Developer's Guide"] },
            { "title": "Company", "body": ['About', 'Our Experts', 'Terms & Conditions', 'Schedule a Demo', 'Privacy Policy'] },
        ]
    return (
        <footer className='footer-tukp'>
            <div className='container'>
                <div className='footer-flex'>
                    {contenido.map((item, index) => (
                        <ul className='ul-footer'>
                            <li key={index}>
                                <a href='#' className='title'> {item.title}</a>
                
                                <ul className='ul-footer'>
                                    {item.body.map((subItem, subIndex) => (
                                        <li>
                                            <a href="#" className='link'>{subItem}</a>
                                        </li>
                                    ))}
                                </ul>
                
                            </li>
                        </ul>
                    ))}
                
                
                    <ul className='ul-footer flex'>
                        <li className='footer-contact'>
                            <a href='#' className='title'> Contact Us</a>
                
                            <div className='footer-button'>
                                <Botones background={'transparent'} border={'white'} icon={'bi bi-facebook'} color={'white'}/>
                                <Botones background={'transparent'} border={'white'} icon={'bi bi-linkedin'} color={'white'}/>
                                <Botones background={'transparent'} border={'white'} icon={'bi bi-twitter'} color={'white'}/>
                            </div>
                
                        </li>
                    </ul>
                </div>
                <hr />
                <p className='footer-text'>&copy; 2023. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer