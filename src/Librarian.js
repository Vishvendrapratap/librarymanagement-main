import { Link, Route, Routes } from 'react-router-dom';
import './Librarian.css';
import Dashboard from './Dashboard';
import Addbook from './Addbook';
import Addmember from './Addmember';

export function Librarian({booklist,setBooklist,memberlist,setMemberlist}) {
  return (
     <div className='librariancont'>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Librarian</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/librarian'} className='nav-link'>Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link to={'/librarian/addbook'} className='nav-link'>Add a book</Link>
              </li>
            </ul>
            <Link to={'/librarymanagement'} className='nav-link logoutbtn'>Log out</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='' element={<Dashboard booklist={booklist} setBooklist={setBooklist} memberlist={memberlist} setMemberlist={setMemberlist} />}/>
        <Route path='/addbook' element={<Addbook booklist={booklist} setBooklist={setBooklist}/>}/>
        <Route path='/addmember' element={<Addmember/>}/>
      </Routes>
     </div>
  );
}


