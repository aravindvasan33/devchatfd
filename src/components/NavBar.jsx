import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import LogoutIcon from '@mui/icons-material/Logout';
import Person2Icon from '@mui/icons-material/Person2';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { removeUser } from '../utils/userSlice'
import Connections from './Connections';
import Requests from './Requests';
const NavBar = () => {
  const user=useSelector((store)=>store.user)
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handlelogout=async()=>{
    try{
      await axios.post("http://localhost:7000/logout",{},{withCredentials:true});
      dispatch(removeUser());
      return navigate("/login");
    }
    catch(err)
    {
      console.err("error"+err);
    }
  }
  
  return (
    <div>
              <div className="navbar relative bg-base-300 flex-direction: row">
  <div className="flex-1">
    <div className='btn btn-ghost'> <img src="./lob.png" className='  w-16 h-12'></img>
    <Link to="/login" className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent font-extrabold">DevChat</Link>
    </div>
    
  </div>
  <div className="flex-none gap-2 m-2">
    
   {user&& <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="">
        <h4 className=''>{user.firstName}</h4>
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photoUrl} className='w-10 '
          />
          
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
    
          
        <div className=" bg-base-300 shadow-xl">
            <div className="justify-center content-center">
               
               <img alt="Tailwind CSS Navbar component" src={user.photoUrl} className="h-17 w-18 rounded-full justify-center"/>
                <h4 className="text-center">{user.firstName}</h4>
      
    {/* Flex container for buttons and vertical line */}
    <div className="flex items-center justify-center"> 
      <Link to="/Connections">
        <button className="btn">Connections</button>
      </Link>

      {/* Vertical line */}
      <div
        style={{
          width: '2px',
          height: '40px', // Adjust height
          backgroundColor: 'white',
          margin: '0 10px',
        }}
      ></div>

      <Link to="/Requests">
        <button className="btn">Requests</button>
      </Link>
    </div>

    <div className="card-actions justify-end"></div>
  </div>
</div>

        <li><button><Link to="/profile" className=""><Person2Icon/>Profile</Link></button></li>
        <li><button onClick={handlelogout}><LogoutIcon/>Logout</button></li>
      </ul>
    </div>}
  </div>
</div>



    </div>
  )
}

export default NavBar