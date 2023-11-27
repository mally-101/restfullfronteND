import React from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../assets/Goal-On.jpeg'
import navImg from '../assets/guy  on red.jpeg'



const Navbar = () => {
  return (
    <nav className='border-bottom border-2 border-primary'>
    <div className='container d-flex justify-content-between align-items-center'>
        <div>
            <Link to='/' className='text-decoration-none'>
                <img src={navLogo} alt="navLogo"  
                className='img-fluid'/>
            </Link>

        </div>
        <div>
            <ul className='d-flex align-items-center list-unstyled gap-4'>
                <li>
                    <Link to='/NewUser'
                    className='text-decoration-none'>NewUser</Link>
                </li>
                <li>
                <Link to='/AllUsers'
                className='text-decoration-none'>AllUsers</Link>
                </li>
                <li>
                    <img src={navImg} alt='navImg'
                    className='d-none d-lg-block img-fluid'/>
                </li>
            </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar