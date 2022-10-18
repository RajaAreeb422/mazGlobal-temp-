
// import router, { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styled from "styled-components";

import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import router from 'next/router';
import Head from 'next/head'
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer/Footer';
import { Audio ,Hearts,Rings,Bars,Oval,Puff,TailSpin,ThreeDots} from  'react-loader-spinner'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import rg from './register.module.css'
const Register = () => {
    const [mydiv, setMyDiv] = useState(false)
    const [remail, setREmail] = useState('')
    const [modal, setModal] = React.useState(false);
    const toggle = () => setModal(!modal);
    const [forgotmodal, setForgotModal] = React.useState(false);
    const forgottoggle = () => setForgotModal(!forgotmodal);
    
    // form validation rules 
    const schema = Yup.object().shape({
        first_name: Yup.string()
            .required('First Name is required'),
        last_name: Yup.string()
            .required('Last Name is required'),
        email: Yup.string()
            .email('Email must be a valid Email')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
        mobile: Yup.string()
            .required('Mobile  is required'),
        date_of_birth: Yup.string()
            .required('Date of Birth is required'),
        cPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match'),

    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmitHandler = (data) => {
        data={
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
            mobile: data.mobile,
            phone: data.phone,
            date_of_birth:data.date_of_birth
        }
        const json = JSON.stringify(data);
        console.log("jsonnnn",json);
        // https://api.mazglobal.co.uk/maz-api/users
        axios.post(`https://api.mazglobal.co.uk/maz-api/users`, json,

            { headers: { 'content-type': 'application/json' } }
        )
            .then(response => {
                console.log('response',response)
                if (response.data.success == 1) {
                    toggle()
                    console.log("status",response.data.success)
                    // router.push('/account/login');
                }
                else {
                  if(response.data.message=='email already exists')
                    setMyDiv(true)
                  
                    else{
                     toast.error(`${response.data.message}`)
                    }

                }

            }).catch((err) => {
              //  if (err.response.status === 409) {
               
                    console.log("error",err)
                    setMyDiv(true)
                    // toast.error(`Something went wrong `)
                  
              //  }
               // console.log(err.response.status)
            });

    }

    const go = () => {
        router.push('/')

    };

    const move=()=>{
        router.push('/account/login');
    }


 

    return (
      <> 
      <Navbar/>
      <ToastContainer/>
        <div className={rg.container}>
              <Head>
        <title>Register Page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
            <div className={rg.wrapper}>
                <p className={rg.title}>Register</p>
                <form className={rg.form} onSubmit={handleSubmit(onSubmitHandler)}>
                    <input  name="first_name" type="text"
                     placeholder="First Name" {...register('first_name')} className={`form-control ${rg.input} ${errors.first_name ? 'is-invalid' : ''}`} />
                    <p className={rg.error}>{errors.first_name?.message}</p>

                    <input  name="last_name" type="text" placeholder="Last Name" 
                    {...register('last_name')}
                     className={`form-control ${rg.input} ${errors.last_name ? 'is-invalid' : ''}`} />
                    <p className={rg.error}>{errors.last_name?.message}</p>

                    <input name="email" placeholder="Email" {...register('email')}
                     className={`form-control ${rg.input} ${errors.email ? 'is-invalid' : ''}`} />
                    <p className={rg.error}>{errors.email?.message}</p>
                    {mydiv &&
                        <p className={rg.error}>Email Already Exist</p>
                    }


                    <input  name="Password" type="password" 
                    placeholder="Password" {...register('password')} className={`form-control ${rg.input} ${errors.password ? 'is-invalid' : ''}`} />
                    <p className="invalid-feedback">{errors.password?.message}</p>

                    <input name="cPassword" type="password" placeholder="Confirm Password" 
                    {...register('cPassword')} 
                    className={`form-control ${rg.input} ${errors.cPassword ? 'is-invalid' : ''}`} />
                    <p className="invalid-feedback">{errors.cPassword?.message}</p>

                    <input 
                     name="mobile" type="phone"
                      placeholder="Mobile No." {...register('mobile')} 
                      className={`form-control ${rg.input} ${errors.mobile ? 'is-invalid' : ''}`} />
                    <p className={rg.error} >{errors.mobile?.message}</p>

                    <input  name="phone" type="phone"
                     placeholder="Phone No." {...register('phone')} 
                     className={`form-control ${rg.input} ${errors.phone ? 'is-invalid' : ''}`} />
                    <p className={rg.error}>{errors.phone?.message}</p>

                    <input  name="date_of_birth" type="date" label="Date of Birth"
                     {...register('date_of_birth')} className={`form-control ${rg.input} ${errors.date_of_birth ? 'is-invalid' : ''}`} />
                    <p className={rg.error}>{errors.date_of_birth?.message}</p>
                   
                   {/* <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}> */}
                   
                   <center>
                   <button className={rg.btn} type="submit">
                        Register
                    </button>
                    </center> 
                    {/* <Button type="submit" onClick={()=>move}>
                        Back to Home
                    </Button> */}
                    {/* </div> */}
                        <p style={{fontFamily:'Helvetica',textDecoration:'none'}} className="btn btn-link" onClick={()=>go()}>  Back to Home</p>
                        
                    {/* </form> */}
                </form>
            </div>

          <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={modal}>Email Verification</ModalHeader>
          <ModalBody>
            <>Link has been sent to your email address.Please Verify it to activate your account. </>
          </ModalBody>
          <ModalFooter>
            <Button2 color="primary" onClick={move}>
              Okay
            </Button2>
          </ModalFooter>
        </Modal>

       




        </div>
        <Footer/>
        </>
    );
};

export default Register;



const Container = styled.div`
  
  background: linear-gradient(
      rgba(109, 94, 94, 0.5),
      rgba(132, 113, 113, 0.5)
    ),
    url("/1-sliders.png");
      center;
  background-size: cover;
  display: flex;
  height:auto;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  margin: 50px 0px 50px 0px;
  padding: 20px;
  background-color: white;
  opacity: 80%;
  margin-left:auto;
  margin-right:10%;
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

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 10px 0px 10px 0px;
  border: 1px solid grey;
  
  border-radius: 5px;

`;
const Error = styled.div`
color: red;
margin-top: 1px;
font-size: small;
  flex: 1;
  `;


const Button2 = styled.button`
  width: 40%;
  border: none;
  margin-top: 10px;
  padding: 10px 10px;
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