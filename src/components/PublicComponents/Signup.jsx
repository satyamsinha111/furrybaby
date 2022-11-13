import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import petBanner from "../../assets/petbanner.jpeg"
import { Link } from 'react-router-dom';
import "./style.css"

function Signup() {

  

  let onSubmit = ()=>{
//

  }


  return (
    <>
    <div className="wrapper">
      <div className="container d-flex justify-content-center">
        <Card className='formDiv'>
        <Card.Img variant="top" src={petBanner} />
          <Card.Body>
            <Card.Title>Signup Please</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nam tempora libero atque molestias corrupti, earum velit facere quia et possimus qui, dolore minima vel, corporis temporibus perspiciatis minus repellendus!
            </Card.Subtitle>

            <Form className='row mt-4'>
              <Form.Group className="col-12 mb-3" controlId="formBasicFName"> 
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' placeholder='First name' />
              </Form.Group>
              <Form.Group className="col-12 mb-3" controlId="formBasicFName"> 
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' placeholder='Last name' />
              </Form.Group>
              <Form.Group className="col-12 mb-3" controlId="formBasicFName"> 
                <Form.Label>Address</Form.Label>
                <Form.Control type='text' placeholder='Address' />
              </Form.Group>
              <Form.Group className="col-12 mb-3" controlId="formBasicFName"> 
                <Form.Label>City</Form.Label>
                <Form.Control type='text' placeholder='City' />
              </Form.Group>
              <Form.Group className="col-12 mb-3" controlId="formBasicFName"> 
                <Form.Label>Bio</Form.Label>
                <Form.Control  as="textarea" rows={3} type='text' placeholder='Please enter your bio here' />
              </Form.Group>
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
              <div className="col-12 my-4 d-flex justify-content-start align-items-center flex-row">
                <Link className='text-center' to={'/'}>If you already have account please login here.</Link>
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
    </>
  )
}

export default Signup