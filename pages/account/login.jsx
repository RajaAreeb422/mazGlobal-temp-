

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styled from "styled-components";
import axios from 'axios';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
// import router, { useRouter } from 'next/router';
import router from 'next/router';
import Head from 'next/head'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer/Footer';
import { Audio ,Hearts,Rings,Bars,Oval,Puff,TailSpin,ThreeDots} from  'react-loader-spinner'
const Login = () => {
  const [mydiv, setMyDiv] = useState(false)
  const [spin,setSpin]=useState(false)
  const [error, setError] = useState('')
  const [remail, setREmail] = useState({
    email:''
  })
  const [forgotmodal, setForgotModal] = React.useState(false);
  const forgottoggle = () => setForgotModal(!forgotmodal);
  useEffect(() => {
    
  }, []);

  // form validation rules 
 
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid Email')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),

  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    const json = JSON.stringify(data);
    console.log(json);
    setSpin(true)
    axios.post(`https://api.mazglobal.co.uk/maz-api/users/login`, json,

      { headers: { 'content-type': 'application/json' } }
    )
      .then(res => {
        console.log(res.data)
        if (res.data.success === 1) {
          router.push('/');
          localStorage.setItem('token', res.data.token)
          console.log("user is", res.locals.currentUser)
        }
        else {
          setMyDiv(true)
          setSpin(false)
        }

      }).catch(err => console.log(err));
  }

  const go=()=>{
    router.push('/account/register')
  }

  const backToHome=()=>{
    router.push('/')
  }

  const recoveryEmail = (e) => {
    setREmail({email:e.target.value})

};
const validateEmail = (e) => {
   let email=e.target.value
  if(email=='')
  {
    setError('')
  }
  else if (validator.isEmail(email)) {
    //setEmailError('Valid Email :)')
    setREmail({email:e.target.value})
    setError('')
  } else {
    setError("Invalid Email.Please Enter Correct format abc123@xyz.com")
  }
}

const chkemail = () => {
    console.log("in chk email",remail)
  // axios.post(`http://localhost:8080/maz-api/users/forgotPassword`, remail,
  
  // { headers: { 'content-type': 'application/json' } }
  // )
  // .then(res=>{
  //   toast(`Check your email to get the link `)
   
  // }).catch(err=>{
  //   if(err.status==403)
  //   toast(`Sorry Email is not registered`)
  //   else
  //   toast(`!OOps, Something went wrong`)
  //   console.log(err)})
 // https://api.mazglobal.co.uk/maz-api
  // { headers: { 'content-type': 'application/json' } }
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  
    axios.post(`http://localhost:8080/maz-api/users/account/forgotPassword`, remail,
           { headers: { 'content-type': 'application/json' } }
        ).then(response => {
          toast(`Check your email to get the link `)
          console.log("helloo",response.status)
              if(response.status!=403)
              forgottoggle()
              else
               toast(`Sorry Email is not registered`)
             
                 
                
            }).catch((err) => {
             
              if(err.message=='Request failed with status code 403')
                toast(`Sorry Email is not registered`)
              else
                toast(`!OOps, Something went wrong`)
                 console.log("helloo",err.message)
                 forgottoggle()
            });

    
      // this is a valid email address
      // call setState({email: email}) to update the email
      // or update the data in redux store.
 
      // invalid email, maybe show an error to the user.
      // console.log("in ifffff")
      // setError("Invalid Email.Please Enter Correct format abc123@xyz.com")
   

          

};

  return (
<> 
{spin==false?
<>
<Navbar/>
    <Container>
        <Head>
        <title>Login Page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
    
      <Wrapper>
      <ToastContainer/>
        <Title>LOG IN</Title>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>

          <Input name="email" placeholder="Email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
          <Error >{errors.email?.message}</Error>

          <Input name="password" type="password" placeholder="Password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
          <Error >{errors.password?.message}</Error>
          <Button2  >
            Login
          </Button2>
          {mydiv &&
            <Error>Invalid email or password</Error>
          }
          <p onClick={()=>forgottoggle()}>Forget Password</p>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <p style={{marginRight:'auto',fontSize:'13px',marginLeft:'-11px'}} className="btn btn-link" onClick={()=>go()}> Create a new Account</p>
          <p style={{fontSize:'13px'}} className="btn btn-link" onClick={()=>backToHome()}> Back to Home</p>
         
          </div>
          {/* </form> */}
        </Form>
      </Wrapper>

      <Modal isOpen={forgotmodal} toggle={forgottoggle}>
          <ModalHeader toggle={forgotmodal}>Recovery Email</ModalHeader>
          <ModalBody>
            <input style={{width:'400px',padding:'6px',borderRadius:'4px'}}
             type='email' name='email' placeholder='Registered Email' onChange={(e) => validateEmail(e)}/>
            <p style={{color:'red'}}>{error}</p>
          </ModalBody>
          <ModalFooter>
            <Button2 color="primary" onClick={chkemail}>
              Okay
            </Button2>
          </ModalFooter>
        </Modal>    
    </Container>
    <Footer/>
    </>:
    
    <div style={{marginTop:'auto',background:'black',opacity:'0.5',height:'100%',
marginBottom:'auto',width:'100%'}}>
  <div    style={{marginLeft:'auto',marginRight:'auto',width:'10%'}}>
  <Puff
       height = "750"
       width = "300"
       radius = "9"
       left='7%'
       color = 'rgba(67, 143, 173, 0.933)'
    
       ariaLabel = 'three-dots-loading'     
       wrapperStyle
       wrapperClass
     />
  </div>

</div>

    }
    </>
  );
};

export default Login;



const Container = styled.div`
  width: auto;
   padding:60px;
  background: linear-gradient(
      rgba(149, 127, 127, 0.5),
      rgba(144, 117, 117, 0.5)
    ),
    url("/1-sliders.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  margin-left:auto;
  margin-right:8%;
  
  background-color: white;
  opacity: 80%;
  border-radius: 30px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Error = styled.div`
color: red;
font-size: small;
  flex: 1;
  padding-left: 10px;
  `;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button2 = styled.button`
  width: 40%;
  border: none;
  margin-top: 10px;
  padding: 10px 10px;
  font-weight:500;
background-color:red;
  /* background-image: linear-gradient(to right, red,rgba(67, 143, 173, 0.933)); */
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;