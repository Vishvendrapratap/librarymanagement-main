import { Button, TextField } from "@mui/material";
import { Form,Formik, useFormik} from "formik";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Membersignup({memberlist,setMemberlist}){
    const navigate=useNavigate()
    const initialValues={
        fname:'',
        lname:'',
        mobile:'',
        email:'',
        password:'',
        booksborrowed:[]
      }

       
      const onSubmit=(values)=>{
        navigate('/memberlogin')
        setMemberlist([...memberlist,values])
      }
      const validate=(values)=>{
        let errors={}
        if(!values.fname)errors.fname='required*'
        if(!values.lname)errors.lname='required*'
        if(!values.email)errors.email='required*'
        if(!values.mobile)errors.mobile='required*'
        if(!values.password)errors.password='required*'
        return errors;
      }
    
      const formik=useFormik({
        initialValues,
        onSubmit,
        validate
      })
    return(
        <div>
            <div className="container-fluid memlogcont">
            <Formik>
            <Form onSubmit={formik.handleSubmit} className='form'  >
                <div className="welcome">Create an account</div>

                <div className="inpbox">
                <TextField className='textinp' type={'text'} label='Enter First Name' value={formik.values.fname} name={'fname'} onChange={formik.handleChange} onBlur={formik.handleBlur} fullWidth  ></TextField>
                    <div >{formik.errors.fname && formik.touched.fname?<div className="error">{formik.errors.fname}</div>:null}</div>
                </div>

                <div className="inpbox">
                <TextField className='textinp' type={'text'} label='Enter Last Name' value={formik.values.lname} name={'lname'} onChange={formik.handleChange} onBlur={formik.handleBlur} fullWidth  ></TextField>
                    <div >{formik.errors.lname && formik.touched.lname?<div className="error">{formik.errors.lname}</div>:null}</div>
                </div>

                <div className="inpbox">
                <TextField className='textinp' type={'text'} label='Enter Mobile Number' value={formik.values.mobile} name={'mobile'} onChange={formik.handleChange} onBlur={formik.handleBlur} fullWidth  ></TextField>
                    <div >{formik.errors.mobile && formik.touched.mobile?<div className="error">{formik.errors.mobile}</div>:null}</div>
                </div>

                <div className="inpbox">
                <TextField className='textinp' type={'email'} label='Enter Email' value={formik.values.email} name={'email'} onChange={formik.handleChange} onBlur={formik.handleBlur} fullWidth  ></TextField>
                    <div >{formik.errors.email && formik.touched.email?<div className="error">{formik.errors.email}</div>:null}</div>
                </div>

                <div className="inpbox">
                    <TextField className='textinp' variant="outlined" type={'password'} label={'Enter Password'} value={formik.values.password} name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} fullWidth></TextField>
                    <div>{formik.errors.password && formik.touched.password?<div>{formik.errors.password}</div>:null}</div>
                </div>

                <Button variant='contained' type='submit' className="loginbtn">Sign up</Button>

                <div>Already have an account? <Link to={'/memberlogin'}>Login</Link></div>
            </Form>
            </Formik>
      </div>
        </div>
    )
}