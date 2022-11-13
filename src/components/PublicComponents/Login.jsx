import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import petBanner from "../../assets/petbanner.jpeg"
import "./style.css"
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="wrapper">
      <div className="container d-flex justify-content-center">
        <Card className='formDiv'>
        <Card.Img variant="top" src={petBanner} />
          <Card.Body>
            <Card.Title>Login Please</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nam tempora libero atque molestias corrupti, earum velit facere quia et possimus qui, dolore minima vel, corporis temporibus perspiciatis minus repellendus!
            </Card.Subtitle>

            <Form className='row mt-4'>
              
              <Form.Group className="col-12 mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="col-12 mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="col-12 my-4 d-flex justify-content-start align-items-start flex-column">
                <Link className='text-center'>Forgot Password?</Link>
                <Link className='text-center' to={'/signup'}>If you don`t have any account please signup here.</Link>
              </div>
              <div className='col-12'>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>


      </div>
    </div>
  )
}

export default Login