import React from 'react';
import Button from 'react-bootstrap/Button';
import Center from 'react-center';
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <div>
      <Center>
        <div>
          <h1>Comings and Goings</h1>
        </div>
        <br />
      </Center>
      <Center>
        <div>
          <Link to="/register">
            <Button variant="outline-primary">Sign up</Button>
          </Link>{' '}
          <Link to="/login">
            <Button variant="success">Login</Button>
          </Link>
        </div>
      </Center>
    </div>
  );
};

export default Landing;