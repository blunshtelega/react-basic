import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../context/context';
import CommonButton from '../Button/CommonButton';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className='navbar'>
            <CommonButton onClick={logout}>
                Выйти
            </CommonButton>
        <div className='navbar__links'>
            <Link className='navbar__item' to="/about">About</Link>
            <Link to="/posts">Posts</Link>
        </div>
      </div>
    );
};

export default Navbar;