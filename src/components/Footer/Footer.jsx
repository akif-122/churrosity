import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
import {FaFacebookF , FaInstagram} from "react-icons/fa6"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="socials">
                    <ul>
                        <li>
                            <Link><FaFacebookF/></Link>
                        </li>
                        <li>
                            <Link><FaInstagram/></Link>
                        </li>
                    </ul>
                </div>
                <div className="copy">
                    <p className='m-0'>POWERED BY  </p>
                    <span><Link>Indolj</Link> </span> | <Link>Privacy Policy</Link> | <Link>FAQS</Link>
                </div>
            </footer>
        </>
    )
}

export default Footer
