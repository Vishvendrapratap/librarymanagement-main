import { Button, TextField } from "@mui/material";
import { Form,Formik, useFormik, } from "formik";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import './Memberlogin.css';

export function Memberlogin({memberlist}) {
  const navigate=useNavigate()
  const initialValues={
    email:'',
    password:''
  }

 
  const onSubmit=(values)=>{
    let fildata=memberlist.filter(x=>{
      return x.email==values.email
    })
    if(fildata[0]==null){
      return alert("user doesn't exist")
    }
    if(fildata[0].password!=values.password){
      return alert("Incorrect password")
    }
    navigate(`/memberpage/${values.email}`)
   
  }

  const validate=(values)=>{
    let errors={}
    if(!values.email)errors.email='required*'
    if(!values.password){errors.password='required*'}
    return errors;
  }

  const formik=useFormik({
    initialValues,
    onSubmit,
    validate
  })


  return (
    <div>
      <div className="container-fluid memlogcont">
        <Formik>
          <Form onSubmit={formik.handleSubmit} className='form'  >
              <div className="welcome">Welcome ..!</div>
              <div className="inpbox">
              <TextField className='textinp' type={'email'} label='Enter Email' value={formik.values.email} name={'email'} onChange={formik.handleChange} onBlur={formik.handleBlur} fullWidth  ></TextField>
                <div >{formik.errors.email && formik.touched.email?<div className="error">{formik.errors.email}</div>:null}</div>
              </div>
              <div className="inpbox">
                <TextField className='textinp' variant="outlined" type={'password'} label={'Enter Password'} value={formik.values.password} name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} fullWidth></TextField>
                <div>{formik.errors.password && formik.touched.password?<div>{formik.errors.password}</div>:null}</div>
              </div>
              <Button variant='contained' type='submit' className="loginbtn">Login</Button>
              <div>Don't have an account? <Link to={'/membersignup'}>Sign up</Link></div>
           
          </Form>
        </Formik>
      </div>
    </div>
  );
}
