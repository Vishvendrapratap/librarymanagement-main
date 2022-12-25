import './Dashboard.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({booklist,setBooklist,memberlist,setMemberlist}){

    const [dis1,setDis1]=useState("none")
    const [dis2,setDis2]=useState("none")
    const styles1={
        display:dis1
    }
    const styles2={
        display:dis2
    }

    const navigate=useNavigate()

    return(
        <div>
            <div className='container-fluid cardscontainer'>
           <div className="card bookscard shadow" onClick={()=>{
               setDis2("none")
               setDis1(dis1==""?"none":"")
           }}>
            <img className="bookimage" src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg" ></img>
            <div className='card-body cbody'>Books List</div>
           </div>
           <div className="card memberscard shadow" onClick={()=>{
               setDis1("none")
               setDis2(dis2==""?"none":"")
           }}>
            <img className="memimage" src='https://www.shareicon.net/data/128x128/2015/08/06/81216_man_512x512.png'></img>
            <div className='card-body cbody'>Members List</div>
           </div>
           </div>
           
           <TableContainer component={Paper} className='bookstable' style={styles1} >
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
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align='center' className='td'>{index+1}</TableCell>
              <TableCell align="center" className='td'>{row.title}</TableCell>
              <TableCell align="center" className='td'>{row.author}</TableCell>
              <TableCell align="center" className='td'>{row.quantity}</TableCell>
              <TableCell align="center" className='td'>{row.available}</TableCell>
              <TableCell align="center" className='actionbtns td'>

                <Button variant='contained' className='editbtn' onClick={()=>{
                    navigate(`/editbook/${row.title}`)
                }}>Edit</Button>

                <Button variant='contained' className='delbtn' onClick={()=>{
                     setBooklist([...booklist.slice(0,index),...booklist.slice(index+1,booklist.length)])
                }}>Delete</Button>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    <TableContainer component={Paper} className='bookstable' style={styles2} >
      <Table aria-label="simple table" >
        <TableHead className='thead'>
          <TableRow>
            <TableCell align='center' className='th'>S.no</TableCell>
            <TableCell align="center" className='th'>Name</TableCell>
            <TableCell align="center" className='th'>Mobile no.</TableCell>
            <TableCell align="center" className='th'>Email</TableCell>
            <TableCell align="center" className='th'>Books borrowed</TableCell>
            
            <TableCell align="center" className='th'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {memberlist.map((row,index) => (
              
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align='center' className='td'>{index+1}</TableCell>
              <TableCell align="center" className='td'>{row.fname+" "+row.lname}</TableCell>
              <TableCell align="center" className='td'>{row.mobile}</TableCell>
              <TableCell align="center" className='td'>{row.email}</TableCell>
              <TableCell align="center" className='td'>
    
                  {
                  row.booksborrowed.map(x=>(
                    <div>{x}</div>
                  ))}
  
              </TableCell>
              <TableCell align="center" className='actionbtns td'>
             
                <Button variant='contained' className='delbtn' onClick={()=>{
                     setMemberlist([...memberlist.slice(0,index),...memberlist.slice(index+1,memberlist.length)])
                }}>Delete</Button>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}