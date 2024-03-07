import React from 'react'
import "./tabsBar.css";
import { Link } from 'react-router-dom';
const TabsBar = () => {
  return (
    <>
        <section className='tabs-bar'>
            <ul>
                <li>
                    <Link to={'#SpecialOfferings'}>Special Offerings</Link>
                </li>
                <li>
                    <Link to={'#DiyKit'}>Diy Kit</Link>
                </li>
            </ul>
        </section> 
    </>
  )
}

export default TabsBar
