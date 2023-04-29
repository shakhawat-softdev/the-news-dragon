import { React, useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const PhotoURL = form.photo.value
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => console.error(error.massage))
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }



    return (
        <div>
            <Container>
                <Form onSubmit={handleRegister} className='w-25 mx-auto'>
                    <h3>Please Register</h3>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' required placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Enter Photo URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' required placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' required placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Check onClick={handleAccepted} type="checkbox" name='accept' label={<>Accept <Link to='/terms'>Terms and condition</Link></>} />
                    </Form.Group>

                    <Button variant="primary" type="submit" disabled={!accepted}>Register</Button>
                    <br />

                    <Form.Text className="text-success">
                        Already have an account? Please <Link to='/login'>Login</Link>
                    </Form.Text>

                    <Form.Text className="text-success">

                    </Form.Text>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Register;