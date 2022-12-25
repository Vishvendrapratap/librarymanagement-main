import './Homepage.css'; 
import { useNavigate } from 'react-router-dom';
export function Homepage() {
  const navigate=useNavigate()
  return (
    <div className='container-fluid homepagecontainer'>
      <div className='homepagetitle'>Library Management System</div>
      <div className='logincards'>
        <div className='card lcard' onClick={()=>{navigate('/librarian')}}>
          <img src='https://findicons.com/files/icons/2526/bloggers/256/admin.png' className='image adim'></img>
          <div className='cardtitle'>Librarian</div>
        </div>
        <div className='card lcard'  onClick={()=>{navigate('/memberlogin')}}>
        <img src='https://www.shareicon.net/data/128x128/2015/08/06/81216_man_512x512.png' className='image stim'></img>
        <div className='cardtitle'>Member</div>
        </div>
      </div>
    </div>
  );
}
