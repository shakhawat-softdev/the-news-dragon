import React from 'react';
import logo from '../../../../../assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Marquee from "react-fast-marquee";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import NavigationBar from '../NavigationBar/NavigationBar';



const Header = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className='container mt-4'>
            <div className='text-center'>
                <img src={logo} />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format('LLLL')}</p>
            </div>

            <div className='d-flex'>
                <Button variant="danger">Latest</Button>{' '}
                <Marquee speed={50} className='text-bg-gradient'>
                    I can be a React component, multiple React components, or just some text.... Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>

            {/* <NavigationBar/> */}



        </div>
    );
};

export default Header;