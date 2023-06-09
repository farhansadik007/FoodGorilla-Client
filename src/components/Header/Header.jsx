import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div>
                <img className='w-24' src="/foodgorilla.png" alt="" />
                <Link to='/' className="btn btn-ghost normal-case text-4xl font-bold">Food<span className="text-lime-400">Gorilla</span></Link>
            </div>
            <div>
                <ul className="menu menu-horizontal px-1 flex items-center">
                    <li className='mr-8'>
                        <NavLink className="mr-8" to='/'>Home</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                    </li>
                    <li>

                        {user &&
                            <button className="tooltip tooltip-bottom" data-tip={`${user.email}`}>
                            <FaUserCircle style={{ fontSize: '3rem'}} />
                            </button>
                            
                        }
                        <div>

                        {user ?
                            <Button onClick={handleLogOut} className='text-white'>Logout</Button> :
                            <Link to='/auth/login'>
                                <Button className='text-white'>Login</Button>
                            </Link>
                        }
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;