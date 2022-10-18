import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
// import {
// Box,
// Container,
// Row,
// Column,
// FooterLink,
// Heading,
// } from "./FooterStyles";
import {
	Search,
	ShoppingCartOutlined,
	LocalShippingOutlined,
	SupervisedUserCircleOutlined,
	LockRounded,
	Phone,
	LocationCity,
	WhatsApp,
	Email,
	Feedback
  } from "@material-ui/icons";
import Link from "next/link";
import styled from "styled-components";
import ft from './newsletter.module.css'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'
import axios from 'axios'
import ReactWhatsapp from 'react-whatsapp';
import Toast from 'react-bootstrap/Toast';
const Footer = () => {
	const [showA, setShowA] = useState(false);
	const [showB, setShowB] = useState(true);
  
	const toggleShowA = () => setShowA(!showA);
	const toggleShowB = () => setShowB(!showB);
	const [state,setState]=useState({
		name:'',
		email:'',
		message:''
	})
	const [nerror,setNError]=useState('')
	const [error,setError]=useState('')
	const [merror,setMError]=useState('')
	useEffect(() => {
	
	  }, []);
	  const validateEmail = (e) => {
		let email=state.email;
		
	  if(state.email=='')
	  {
		setError('')
	  }
	  else if (validator.isEmail(email)) {
		//setEmailError('Valid Email :)')
		setError('')
		setMError('')
		setNError('')
		console.log("feedback",state)
		axios
		.post(
		  `https://api.mazglobal.co.uk/maz-api/users/feedback`,
		  state,
		  { headers: { 'content-type': 'application/json' } },
		)
		.then(response => {
			console.log("response",response.data.message)
			if(response.data.message=='Email has been sent to the admin')
		       toggleShowA()
		
			//toast(`Your Response has been submitted .Thanks for your Feedback `)
			else
			toast(`Can't send conformation email `)

			setState({
				name:'',
		email:'',
		message:''
			})
		 
		})
		.catch(error => {
		console.log(error)
		toast(`Sorry Something gone wrong `)
		});
	  } else {
		setError("Invalid Email.Please Enter Correct format abc123@xyz.com")
	  }
	}
	  const handleChange = (e) => {
		setState({...state,
			[e.target.name]:e.target.value
		})
	
	};
	const feedback = (e) => {
		e.preventDefault();
		if(state.name=='')
		setNError('Plz fill the field')

		if(state.email=='')
		setError('Plz fill the field')

		if(state.message=='')
		setMError('Plz fill the field')
		if(state.email!='')
		validateEmail()
	    
		// https://api.mazglobal.co.uk/maz-api/user
		
		

	}
	
return (

	<div className={ft.box}>
    {/* <ToastContainer/>		    */}
	<div className={ft.container}>
		<div className={ft.row}>

		<div className={ft.column}>
		<Image  height='250px' width='200px' src='/Maz Global Logo-02.png'/>
		</div>	
		<Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="data:image/png;base64,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"
              className="rounded me-2"
			  style={{height:'10%',width:'10%'}}
              alt=""
            />
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body>Thanks for your Feedback</Toast.Body>
        </Toast>
		<form className={ft.column}>
			<div className={ft.heading} style={{marginLeft:'0px'}}>Feedback</div>
			<input className={ft.input} 
			name='name' type='text' placeholder="Name" value={state.name} onChange={(e) => handleChange(e)}/>
			<p style={{color:'red'}}>{nerror}</p>
			<input className={ft.input} name='email'type='email' placeholder="Email" onChange={(e) => handleChange(e)}
			value={state.email}/>
			<p style={{color:'red'}}>{error}</p>
			<textarea  className={ft.textarea} name='message' placeholder="Message" onChange={(e) => handleChange(e)}
			value={state.message}>

			</textarea>
			<p style={{color:'red'}}>{merror}</p>
            <button className={ft.button} onClick={(e)=>feedback(e)}>Submit</button>
		</form>
		<div className={ft.column}>
			

			<div className={ft.heading}>Contact Us</div>
			
			
			<ReactWhatsapp style={{background:'whitesmoke',border:'1px solid whitesmoke'}}
			className={ft.footlink} number="+44 (0)20 86542 7567" message="Chat with US" > 
			<WhatsApp/> 
			<P>+44 (0)20 86542 7567</P></ReactWhatsapp>
			<Link href='tel:+44 (0)20 86542 7567'>
			<div className={ft.footlink}  href="#"><Phone/>    <P>+44 (0)20 86542 7567</P></div>
			</Link>
			
			<Link href='mailto:contact@mazglobal.co.uk?subject=SendMail&body=Description'>
			  <div className={ft.footlink}>
				<Email/><P>contact@mazglobal.co.uk</P>
				</div>
				</Link>
			<div className={ft.footlink}  ><LocationCity  /> <P>  10 Downing Street III LONDON  </P></div>
			
						
		</div>
		

<div className={ft.column}  style={{marginTop:'0px', marginLeft:'20px'}}>
			
			
			<div className={ft.heading}  >Quick Links</div>
			<div className={ft.footlink}   ><Link href='/terms' as={`/terms`}><PP>Terms and Conditions</PP></Link></div>
			<div className={ft.footlink} ><PP>Connect with us</PP></div>
			<div className={ft.footlink} href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				<img src="./fb.svg" alt="" style={{ width: "30px",marginLeft:'0px' }} />
				<img src="./you.svg" alt="" style={{ width: "30px",marginLeft:'20px' }} />
				<img src="./insta.svg" alt="" style={{ width: "30px" ,marginLeft:'20px'}} />
				</span>
			</i>
			</div>
		</div>
		</div>
	</div>
	
	<div style={{borderTop:'1px solid white',
				backgroundColor:'black',
				paddingBottom: "10px",
				marginBottom:'-18px',
				paddingTop: "10px"}}>
	<span style={{ color: "white",
				textAlign: "left",
				paddingBottom: "10px",
				marginLeft:'20px',
				paddingTop: "10px", }}>
		©️ 2022 MazGlobal. All Rights Reserved.
	</span>
	<Link href='/terms' as={`/terms`}>
	<div className={ft.span} style={{cursor:'pointer'}} >
		| Terms & conditions | Privacy | Cookie Disclaimers |

	</div>
	</Link>
	</div>
	</div>
	
);
};
export default Footer;


const Span=styled.span` 
color: white;
float:right;
margin-right:20px; 
@media (max-width: 760px) {
	display:none ;
	
}
`
 const Box = styled.div`
padding: 10px 0px;
background: whitesmoke;
bottom: 0;
width: 100%;

@media (max-width: 760px) {
	background:white ;
	padding:0px ;
	
}
`;

 const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
// margin-left: -230px;
`;
 const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	// max-width: 1000px;
	margin: 0 auto;
	padding-top:20px;
	padding-bottom:40px;
	
@media (max-width: 700px) {
	display:none;
	
}
	/* background: red; */
`
const PP=styled.p` 
text-decoration:none;
cursor:pointer;
color:rgba(16, 103, 138, 0.933);
margin-top:0px;
`
const P=styled.p` 
text-decoration:none;
cursor:pointer;
color:rgba(16, 103, 138, 0.933);
margin-top:3px;
margin-left:8px ;
`
const FootLink=styled.div`
 text-decoration:none;
 padding-left:40px !important;
 padding:3px ;
 display:flex;
 flex-direction:row;
 
 color:rgba(16, 103, 138, 0.933);
`
const Input=styled.input`
 width:200px;
 padding:6px ;
 border: 0.095rem solid lightgrey;
 color:white;
 border-radius:4px;
 margin-bottom:4px;
`

 const Button=styled.button`
 width:100px;
 padding:6px ;
 border: 0.095rem solid lightgrey;
 color:white;
 border-radius:4px;
 background-color:rgba(16, 103, 138, 0.933);
`


const Textarea=styled.textarea`
  width:200px;
 padding:6px ;
 color:white;
 font-family:'Helvetica';
 border: 0.095rem solid lightgrey;
 border-radius:4px;
 margin-bottom:4px;
`


 const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(285px, 1fr));
grid-gap: 60px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

 const FooterLink = styled.a`
color: #fff;
// margin-bottom: 20px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

 const Heading = styled.p`
color: rgba(16, 103, 138, 0.933);
text-decoration: none;
margin-left:40px;
font-weight:700;
font-size:18px;
`;