import logo from './logo.svg';
import './App.css';
import { Homepage } from './Homepage';
import { Route, Routes } from 'react-router-dom';
import { Memberlogin } from './Memberlogin';
import Membersignup from './Membersignup';
import { Librarian } from './Librarian';
import { useState } from 'react';
import { Memberpage } from './Memberpage';

import { Editbook } from './Editbook';






function Decrementavailable(index,booklist){
  if(booklist[index].available!=0)booklist[index].available--
    }
function App() {

  const initialMemberlist=[
    {
      fname:"Ramesh",
      lname:"kumar",
      mobile:"9974635275",
      email:"ramesh@gmail.com",
      password:"ramesh123",
      booksborrowed:['The Rainbow','The Age of Innocence']
    },
    {
      fname:"Dinesh",
      lname:"kumar",
      mobile:"9927593495",
      email:"dinesh@gmail.com",
      password:"dinesh123",
      booksborrowed:['Invisible Man','Darkness at Noon']
    }
  ]
  const initialBooklist=[
    {
      title:"Darkness at Noon",
      author:"Arthur Coestler",
      quantity:"20",
      available:"18"
    },
    {
      title:"Invisible Man",
      author:"Ralph Ellison",
      quantity:"10",
      available:"8"
    },
    {
      title:"Secret agent",
      author:"Joseph Conard",
      quantity:"45",
      available:"40"
    },
    {
      title:"The Rainbow",
      author:"D.H. Lawrence",
      quantity:"10",
      available:"7"
    },
    {
      title:"The Age of Innocence",
      author:"Edith Wharton",
      quantity:"24",
      available:"22"
    }
  ]
  
  const [booklist,setBooklist]=useState(initialBooklist)
  const [memberlist,setMemberlist]=useState(initialMemberlist)
  
 
  

  return (
    <div>
      <Routes>
        <Route path='/librarymanagement' element={<Homepage/>}/>

        <Route path='/librarian' element={<Librarian booklist={booklist} setBooklist={setBooklist} memberlist={memberlist} setMemberlist={setMemberlist}/>}>
          <Route path='/librarian' />
          <Route path='/librarian/addbook'/>
          <Route path='/librarian/addmember'/>
        </Route>
        
        <Route path='/memberlogin' element={<Memberlogin memberlist={memberlist}/>}/>
        <Route path='/membersignup' element={<Membersignup memberlist={memberlist} setMemberlist={setMemberlist} />}/>
        <Route path='/memberpage/:email' element={<Memberpage memberlist={memberlist} booklist={booklist} Decrementavailable={Decrementavailable}/>}/>
        <Route path='/editbook/:title' element={<Editbook booklist={booklist}/>}/>

      </Routes>
    </div>
  );
}

export default App;



