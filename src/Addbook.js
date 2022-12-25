import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { Form,Formik, useFormik} from "formik";

export default function Addbook({booklist,setBooklist}){
    const navigate=useNavigate()
    const initialValues={
        title:'',
        author:'',
        quantity:'',
        available:''
      }
        const onSubmit=(values)=>{
          
          setBooklist([...booklist,values])
          navigate('/librarian')
        }
        const validate=(values)=>{
          let errors={}
          if(!values.title)errors.title='required*'
          if(!values.author)errors.author='required*'
          if(!values.quantity)errors.quantity='required*'
          if(!values.available)errors.available='required*'
          return errors;
        }
      
        const formik=useFormik({
          initialValues,
          onSubmit,
          validate
        })
    return(
        <div>
            <Formik>
            <Form onSubmit={formik.handleSubmit} className='form'  >
                <div className="welcome">Add a book</div>

                <div className="inpbox">
                <TextField className='textinp' type={'text'} label='Enter Title' value={formik.values.title} name={'title'} onChange={formik.handleChange} onBlur={formik.handleBlur} fullWidth  ></TextField>
                    <div >{formik.errors.title && formik.touched.title?<div className="error">{formik.errors.title}</div>:null}</div>
                </div>

                <div className="inpbox">
                <TextField className='textinp' type={'text'} label='Enter Author Name' value={formik.values.author} name={'author'} onChange={formik.handleChange} onBlur={formik.handleBlur} fullWidth  ></TextField>
                    <div >{formik.errors.author && formik.touched.author?<div className="error">{formik.errors.author}</div>:null}</div>
                </div>

                <div className="inpbox">
                <TextField className='textinp' type={'number'} label='Enter Total No. Of Books' value={formik.values.quantity} name={'quantity'} onChange={formik.handleChange} onBlur={formik.handleBlur} fullWidth  ></TextField>
                    <div >{formik.errors.quantity && formik.touched.quantity?<div className="error">{formik.errors.quantity}</div>:null}</div>
                </div>

                <div className="inpbox">
                <TextField className='textinp' type={'number'} label='Enter Available Books' value={formik.values.available} name={'available'} onChange={formik.handleChange} onBlur={formik.handleBlur} fullWidth  ></TextField>
                    <div >{formik.errors.available && formik.touched.available?<div className="error">{formik.errors.available}</div>:null}</div>
                </div>

                <Button variant='contained' type='submit' className="loginbtn">Update</Button>

            </Form>
            </Formik>
        </div>
    )
}