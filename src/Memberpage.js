import { Button } from "@mui/material";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Memberpage.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Memberpage({memberlist,booklist,Decrementavailable}){

  const navigate=useNavigate()
  const {email}=useParams()
  let memberdet=memberlist.filter(x=>{
    return x.email==email
  })
  console.log(memberdet)
  memberdet=memberdet[0]

 const [disborbook,setDisborbook]=useState('')
 const styles1={
  display:disborbook
 }

  const [distable,setDistable]=useState('none')
  const styles2={
    display:distable
  }
  
 

  return(
    <div className="memberpagecont">

       <nav className="navbar navbar-expand-lg bg-dark navbar-dark" >
        <div className="container-fluid">
          <a className="navbar-brand mpname" href="#">{memberdet.fname+' '+memberdet.lname}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
               <a className="nav-link mpemail">Email: {memberdet.email}</a>
              </li>
            </ul>
            <Link to={'/librarymanagement'} className='nav-link logoutbtn'>Log out</Link>
          </div>
        </div>
      </nav>
      {memberdet.booksborrowed==''?<div className="bormsg">You haven't borrowed anything till now</div>:null}
      <div>
        <div className="borrowtablebtn" >
        <Button className="borrowbtn" variant="contained" style={styles1}  onClick={()=>{
          setDisborbook('none')
          setDistable(distable==''?"none":'')
        }} >Borrow a book</Button>
        </div>


       <TableContainer component={Paper} className='bookstable' style={styles2}  >
      <Table aria-label="simple table" >
        <TableHead className='thead'>
          <TableRow>
            <TableCell align='center' className='th'>S.no</TableCell>
            <TableCell align="center" className='th'>Title</TableCell>
            <TableCell align="center" className='th'>Author</TableCell>
            <TableCell align="center" className='th'>Quantity</TableCell>
            <TableCell align="center" className='th'>Available</TableCell>
            <TableCell align="center" className='th'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {booklist.map((row,index) => (
            <Tablerow row={row} index={index} email={email} Decrementavailable={Decrementavailable} booklist={booklist} memberdet={memberdet}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    </div>
  )
}


function Tablerow({row,index,email,Decrementavailable,booklist,memberdet}){

  const navigate=useNavigate()
  const [btninfo,setBtninfo]=useState('Borrow')
 
  return(
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align='center' className='td'>{index+1}</TableCell>
              <TableCell align="center" className='td'>{row.title}</TableCell>
              <TableCell align="center" className='td'>{row.author}</TableCell>
              <TableCell align="center" className='td'>{row.quantity}</TableCell>
              <TableCell align="center" className='td'>{row.available}</TableCell>
              <TableCell align="center" className='actionbtns td'>
                <Button variant="contained" className='delbtn'  onClick={()=>{
                    if(btninfo=='Borrow'){
                      Decrementavailable(index,booklist)
                      navigate(`/memberpage/${email}`)
                      setBtninfo('Borrowed')
                      memberdet.booksborrowed.push(booklist[index].title)
                    }
                }}>{btninfo}</Button>

       

              </TableCell>
            </TableRow>
  )
}