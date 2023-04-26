import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import ListGroup from 'react-bootstrap/ListGroup';
import Qzone from '../Qzone/Qzone';
import bg from '../../../../../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mt-4' variant="outline-primary text-center"> <FcGoogle /> Login With Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>
            <div>
                <h4 className='mt-5'>Find Us On</h4>
                <ListGroup >
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Twitter</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone />
            <div>
                <img src={bg} alt="" />
            </div>

        </div>
    );
};

export default RightNav;