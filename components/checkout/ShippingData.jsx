
import Link from "next/link";
import { useEffect, useState } from "react";
import chk from "../../styles/checkout.module.css";
import axios from "axios";
import { useForm } from 'react-hook-form';
import{
  FormWithConstraints,
  FieldFeedbacks,
  FieldFeedback
} from 'react-form-with-constraints'
const ShippingData =  props =>  {
 
  const [form,setForm]=useState()
  const [error,setError]=useState('')
  const [state,setState]=useState({
    email:'',
    first_name:'',
    last_name:'',
    country:'',
    address:'',
    city:'',
    state:'',
    post_code:'',
    phone:'',
  })
  useEffect(() => {
    axios
      .get(`hhttps://api.first.org/data/v1/countries`,{mode: 'no-cors'})
      .then((res) => {
        console.log("countries", res.data);
      }).catch(err=>console.log(err))
  }, []);


  const handleChange = e => {

    if(e.target.name=='post_code')
    {
      if(e.target.value=='')
      {
        setError('')
      }
      else if(e.target.value.length<4)
      {
        setError('Post code length must be greater than equal to 4')
      }
      else{
        setError('')
      }
    }
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
    
    form.validateFields(e.target);
    
  }

  const contactSubmit = e => {
    e.preventDefault();

    form.validateFields();
    if(state.post_code<5)
    {
      setError('Post code length must be greater than equal to 4')
    }
    else if (!form.isValid()) {
      console.log('form is invalid: do not submit');
    } else {
  
   
      props.shippingCall(state);

    }
  }

  return (
    <>
    <div style={{padding:'20px',width:'65%'}}>
    <FormWithConstraints
        ref={(form) => setForm(form)}
        onSubmit={contactSubmit}
        noValidate>
   <h3>Shipping Address</h3>
   <hr/>
   <p>Email</p>
   <input style={{width:'70%',borderRadius:'20px',height:'34px'}} required onChange={handleChange}
    className="form-control" type='email' name='email'/>
   <FieldFeedbacks for="email">
            <FieldFeedback style={{color:'red'}} when="*" />
          </FieldFeedbacks>
   
   <p>You can create account after checkout</p>
   <p>First name</p>
   <input style={{width:'70%',borderRadius:'20px',height:'34px'}} required onChange={handleChange}
    className="form-control" type='text' name='first_name'/>
   <FieldFeedbacks for="first_name">
   <FieldFeedback style={{color:'red'}} when="*" />
          </FieldFeedbacks>
   <p style={{marginTop:'10px'}}>Last name</p>
   <input style={{width:'70%',borderRadius:'20px',height:'34px'}} required onChange={handleChange}
   className="form-control" type='text' name='last_name'/>
    <FieldFeedbacks for="last_name">
    <FieldFeedback style={{color:'red'}} when="*" />
          </FieldFeedbacks>
   <p>Street Address</p>
   <p style={{fontWeight:'700'}}>Street Address Line 1</p>
   <input style={{width:'70%',borderRadius:'20px',height:'34px'}} required onChange={handleChange}
    className="form-control" type='text' name='address'/>
   <FieldFeedbacks for="address">
   <FieldFeedback style={{color:'red'}} when="*" />
          </FieldFeedbacks>
   <input style={{width:'70%',borderRadius:'20px',height:'34px',marginTop:'10px'}}
    type='text' name='address2'/>

   <p style={{marginTop:'10px'}}>Country</p>
   <input style={{width:'70%',borderRadius:'20px',height:'34px'}} required onChange={handleChange}
    className="form-control" type='text' name='country'/>
   <FieldFeedbacks for="country">
   <FieldFeedback style={{color:'red'}} when="*" />
          </FieldFeedbacks>
   <p style={{marginTop:'10px'}}>County / State / Province</p>
   <input style={{width:'70%',borderRadius:'20px',height:'34px'}} required onChange={handleChange}
   className="form-control" type='text' name='state'/>
   <FieldFeedbacks for="state">
   <FieldFeedback style={{color:'red'}} when="*" />
          </FieldFeedbacks>
   <p style={{marginTop:'10px'}}>City</p>
   <input style={{width:'70%',borderRadius:'20px',height:'34px'}} required onChange={handleChange}
   className="form-control" type='text' name='city'/>
   <FieldFeedbacks for="city">
   <FieldFeedback style={{color:'red'}} when="*" />
          </FieldFeedbacks>
   <p style={{marginTop:'10px'}}>Post Code</p>
   <input style={{width:'70%',borderRadius:'20px',height:'34px'}} required onChange={handleChange}
   className="form-control" type='text' name='post_code'/>
   <FieldFeedbacks for="post_code">
   <FieldFeedback style={{color:'red'}} when="*" />
          </FieldFeedbacks>
        <p style={{color:'red'}}  >{error}
          </p>
   <p style={{marginTop:'10px'}}>Phone Number</p>
   <input style={{width:'70%',borderRadius:'20px',height:'34px'}} required onChange={handleChange}
    className="form-control" type='text' name='phone'/>
   <FieldFeedbacks for="phone">
   <FieldFeedback style={{color:'red'}} when="*" />
          </FieldFeedbacks>
            <div className="col-md-12">
          {/* <button className="btn btn-lg btn-primary">Send Message</button> */}
          <button className={chk.nxt}>Next</button> 
        </div>
      </FormWithConstraints>
   </div>



    </>
  );
};

export default ShippingData;
