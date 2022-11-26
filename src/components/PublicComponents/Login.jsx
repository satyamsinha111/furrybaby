import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import petBanner from "../../assets/petbanner.jpeg"
import "./style.css"
import { Link } from 'react-router-dom';
import { login } from "../../utils/api.utils"
import SuccessMssg from '../Shared/Dialog';
import { startLoading,stopLoading } from "../../redux/features/loader";
import { showDialog,closeDialog,setMessage,setHeading,setFlag } from "../../redux/features/dialog";
import { useSelector,useDispatch } from "react-redux";

function Login() {

  const loader = useSelector(state=>state.loader.loading);
  const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    email:'',
    password:''
  })

  const handleEmailChange = (ev)=>{
    setPostData({
      email:ev.target.value,
      password:postData.password
    })
  }

  const handlePasswordChange = (ev)=>{
    setPostData({
      email:postData.email,
      password:ev.target.value
    })
  }

  useEffect(() => {
    console.log("Loader ",loader);
  }, [loader])
  
  

  const onLogin = async (ev)=>{
    ev.preventDefault();
    dispatch(startLoading())
    // setLoader(true);
    let res = await login(postData);
    if(res.data){
      dispatch(setHeading("Success"));
      dispatch(setMessage("Logged in successfully"));
      console.log("My Response ",res.data);
      dispatch(stopLoading())
      localStorage.setItem('token',res.data.token)
      dispatch(showDialog())
    }else{
      // setLoader(false);
      // alert("Something went wrong!!");
      localStorage.clear();
      dispatch(setHeading("Success"));
      dispatch(setMessage("Logged in successfully"));
      dispatch(stopLoading())
      dispatch(showDialog())
    }
  }


  return (
    <>
    <SuccessMssg />
    <div className="wrapper">
      <div className="container d-flex justify-content-center">
        <Card className='formDiv'>
          {JSON.stringify(postData)}
        <Card.Img variant="top" src={petBanner} />
          <Card.Body>
            <Card.Title>Login Please</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nam tempora libero atque molestias corrupti, earum velit facere quia et possimus qui, dolore minima vel, corporis temporibus perspiciatis minus repellendus!
            </Card.Subtitle>

            <Form className='row mt-4'>
              
              <Form.Group className="col-12 mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" 
                name='Email'
                onChange={handleEmailChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="col-12 mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='Password'  onChange={handlePasswordChange} />
              </Form.Group>
              <div className="col-12 my-4 d-flex justify-content-start align-items-start flex-column">
                <Link className='text-center'>Forgot Password?</Link>
                <Link className='text-center' to={'/signup'}>If you don`t have any account please signup here.</Link>
              </div>
              <div className='col-12'>
                <Button variant="primary" type="submit" onClick={onLogin} >
                  { loader && <Spinner animation="border" role="status" size="sm" className='me-1'>
      <span className="visually-hidden">Loading...</span>
    </Spinner> }Submit
                 
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

export default Login