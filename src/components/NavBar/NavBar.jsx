import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate  = useNavigate();
    const signUpButtonHandler = ()=>{
        navigate("/sign-up");
    };
    return (
        <nav className='flex justify-between px-[150px] py-[47px]'>
            <Link to={"/mealdb-react/"} className='hover:text-[#ffc107] font-bold text-xl'>Tasty HUT</Link>
            <button onClick={signUpButtonHandler} className='bg-[#ffc107] hover:bg-yellow-500 font-bold text-xl px-[41px] py-[17px] rounded-lg'>Sign Up</button>
        </nav>
    );
};

export default NavBar;