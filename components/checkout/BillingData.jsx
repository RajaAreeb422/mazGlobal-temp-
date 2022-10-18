
import Link from "next/link";
import { useEffect, useState } from "react";
import chk from "../../styles/checkout.module.css";
import{
  FormWithConstraints,
  FieldFeedbacks,
  FieldFeedback
} from 'react-form-with-constraints'
import CreditCard from "./CreditCard";
import { PayPalButton } from "react-paypal-button-v2";
const BillingData = props => {
  const [credit,setCredit]=useState(false)
  const [state,setState]=useState()
  const [error,setError]=useState('')
  const [form,setForm]=useState()
  const [checked,setChecked]=useState(true)
  const [bill,setBill]=useState(false)
  const [paypal,setPayPal]=useState(false)
  const [scriptLoaded,setScriptLoaded]=useState()
  const addPayPalScript=()=>{
    if(window.paypal)
    {
      setScriptLoaded(true)
    }
  }
  // const script=document.createElement('script')
  // script.src='https://www.paypal.com/sdk/js?client-id=AQr21HoLNaAWevoW5Fh2VjicnHu3LN0rGBb4XvTcZ4SysN6dY6qv6lxx_cYrn6aGuAqhjNiP-823c_K3'
  // script.type='text/javascript'
  // script.async=true
  // script.onload=()=>setScriptLoaded(true)
  // document.body.appendChild(script)
  useEffect(() => {
   setState(props.shipData)
 //  addPayPalScript()
  }, []);
  
  const handleChange = e => {
    
   if(e.target.value=='HTML')
   {
    setCredit(true)
    setPayPal(false)
   }
   else {
    setPayPal(true)
   
    setCredit(false)
    }
  }

  const handleChecked = e => {
  
    setChecked(!checked)
    
  //  setBill(true)
   }

   
  const handleBChange = e => {

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

    if (!form.isValid()) {
      console.log('form is invalid: do not submit');
    } else {
      console.log('heloo checkinggggg');
      setBill(true)
      //setChecked(true)
     // props.shippingCall(state);

    }
  }



  return (
   <div style={{padding:'20px',width:'65%'}}>
   <h3>Payment Method</h3>
   <hr/>

<div style={{paddingTop:'30px',paddingBottom:'30px'}}>
<input type="radio" id="html" name="fav_language" value="HTML" onChange={handleChange}/>
<img style={{width:'40px',height:'25px',marginLeft:'10px'}} src="https://www.pngfind.com/pngs/m/471-4717614_visa-logo-png-transparent-visa-card-vector-png.png"/>
 <img style={{width:'50px',height:'25px'}} src="https://freepngimg.com/thumb/mastercard/70535-credit-vector-card-mastercard-logo-free-frame.png"/>
                   
<label htmlFor="html"><strong> Debit  / Credit Card</strong></label><br/>
{credit &&
<div style={{padding:'20px'}}>
<input type="checkbox" id="ad_box" name="ad_box" value="Yes" checked={checked} onChange={handleChecked}/>

  <label htmlFor="vehicle1"  style={{padding:'10px'}}><small>My Billing and Shipping address are same</small></label><br></br>
  {checked==true && bill==false?
  <div style={{padding:'20px'}}>
  <p>{props.shipData.first_name}{''} {props.shipData.last_name}</p>
          <p style={{marginTop:'-10px'}}>{state.address}</p>
          <p style={{marginTop:'-10px'}}>{state.city}  {''}  {state.state} {''} {state.post_code}</p>
          <p style={{marginTop:'-10px'}}>{state.country}</p>
          <p style={{marginTop:'-10px'}}>{state.phone}</p>
          {/* <CreditCard/> */}
</div>:
<> 
{bill==false && checked==false?
  <FormWithConstraints
        ref={(form) => setForm(form)}
        onSubmit={contactSubmit}
        noValidate>
   <h3>Billing Address</h3>
   <hr/>
   <p>Email</p>
   <input style={{width:'70%',borderRadius:'20px',height:'34px'}} required onChange={handleBChange}
    className="form-control" type='email' name='email'/>
   <FieldFeedbacks for="email">
            <FieldFeedback style={{color:'red'}} when="*" />
          </FieldFeedbacks>
   
   <p>You can create account after checkout</p>
   <p>First name</p>
   <input style={{width:'70%',borderRadius:'20px',height:'34px'}} required onChange={handleBChange}
    className="form-control" type='text' name='first_name'/>
   <FieldFeedbacks for="first_name">
   <FieldFeedback style={{color:'red'}} when="*" />
          </FieldFeedbacks>
   <p style={{marginTop:'10px'}}>Last name</p>
   <input style={{width:'70%',borderRadius:'20px',height:'34px'}} required onChange={handleBChange}
   className="form-control" type='text' name='last_name'/>
    <FieldFeedbacks for="last_name">
    <FieldFeedback style={{color:'red'}} when="*" />
          </FieldFeedbacks>
   <p>Street Address</p>
   <p style={{fontWeight:'700'}}>Street Address Line 1</p>
   <input style={{width:'70%',borderRadius:'20px',height:'34px'}} required onChange={handleBChange}
    className="form-control" type='text' name='address'/>
   <FieldFeedbacks for="address">
   <FieldFeedback style={{color:'red'}} when="*" />
          </FieldFeedbacks>
   <input style={{width:'70%',borderRadius:'20px',height:'34px',marginTop:'10px'}}
    type='text' name='address2'/>

   <p style={{marginTop:'10px'}}>Country</p>
   <input style={{width:'70%',borderRadius:'20px',height:'34px'}} required onChange={handleBChange}
    className="form-control" type='text' name='country'/>
   <FieldFeedbacks for="country">
   <FieldFeedback style={{color:'red'}} when="*" />
          </FieldFeedbacks>
   <p style={{marginTop:'10px'}}>County / State / Province</p>
   <input style={{width:'70%',borderRadius:'20px',height:'34px'}} required onChange={handleBChange}
   className="form-control" type='text' name='state'/>
   <FieldFeedbacks for="state">
   <FieldFeedback style={{color:'red'}} when="*" />
          </FieldFeedbacks>
   <p style={{marginTop:'10px'}}>City</p>
   <input style={{width:'70%',borderRadius:'20px',height:'34px'}} required onChange={handleBChange}
   className="form-control" type='text' name='city'/>
   <FieldFeedbacks for="city">
   <FieldFeedback style={{color:'red'}} when="*" />
          </FieldFeedbacks>
   <p style={{marginTop:'10px'}}>Post Code</p>
   <input style={{width:'70%',borderRadius:'20px',height:'34px'}} required onChange={handleBChange}
   className="form-control" type='text' name='post_code'/>
   <FieldFeedbacks for="post_code">
   <FieldFeedback style={{color:'red'}} when="*" />
          </FieldFeedbacks>
          <p style={{color:'red'}}  >{error}
          </p>
   <p style={{marginTop:'10px'}}>Phone Number</p>
   <input style={{width:'70%',borderRadius:'20px',height:'34px'}} required onChange={handleBChange}
    className="form-control" type='text' name='phone'/>
   <FieldFeedbacks for="phone">
   <FieldFeedback style={{color:'red'}} when="*" />
          </FieldFeedbacks>
            <div className="col-md-12">
          {/* <button className="btn btn-lg btn-primary">Send Message</button> */}
          <button className={chk.nxt}>Next</button> 
        </div>
      </FormWithConstraints>
:

      <div style={{padding:'20px'}}>
      <p>{state.first_name}{''} {state.last_name}</p>
              <p style={{marginTop:'-10px'}}>{state.address}</p>
              <p style={{marginTop:'-10px'}}>{state.city}  {''}  {state.state} {''} {state.post_code}</p>
              <p style={{marginTop:'-10px'}}>{state.country}</p>
              <p style={{marginTop:'-10px'}}>{state.phone}</p>
              {/* <CreditCard/> */}
    </div>
}
      </>
}
</div>


}






</div>
<hr/>
<div style={{paddingTop:'30px',paddingBottom:'30px'}}>
<input type="radio" id="css" name="fav_language" value="CSS" onChange={handleChange}/>
<img src='data:image/jpeg;base64,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'
style={{width:'80px',height:'65px'}}/>
<label htmlFor="css"><strong> Paypal Express Checkout</strong></label><br></br>

{paypal==true && 
<div   style={{width:'40%',marginLeft:'auto',marginRight:'auto'}}>
<PayPalButton
 
   amount="0.01"
   // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
   onSuccess={(details, data) => {
     alert("Transaction completed by " + details.payer.name.given_name);

     // OPTIONAL: Call your server to save the transaction
    
   }}
 />
  </div>
  

}


</div>
<hr/>




</div>
  
   
 

  );
};

export default BillingData;
 
   
  