import React, { useState ,useEffect} from 'react';
import UserCard from './UserCard';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Editprofile = ({user}) => {
  const [firstName, setfirstname] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [emailId, setemailId] = useState(user.emailId);
  const [age, setage] = useState(user.age);
  const [photoUrl, setphotourl] = useState(user.photoUrl);
  const [gender, setgender] = useState(user.gender);
  const [about, setabout] = useState(user.about);
  const [skills, setskills] = useState(user.skills);
  const[showtoast,setshowtoast]=useState(false);
  const dispatch=useDispatch();

  const saveProfile=async(e)=>{
    e.preventDefault(); 
    try{
      const res=await axios.patch("http://localhost:7000/profile/edit",{firstName,lastName,emailId,age,gender,about,skills,photoUrl},{withCredentials:true})
      dispatch(addUser(res?.data?.data));
      setshowtoast(true);
      const i=setTimeout(()=>{
        setshowtoast(false);

      },3000);
    }
    catch(err){console.error(err.message); }
  }
  return (
    <div className='flex w-full items-center justify-center my-10'>
    <div className="min-h-screen flex justify-center items-center pt-16 ">
      <div className="w-11/12 max-w-fit bg-base-300 p-10 rounded-lg shadow-lg  overflow-y-auto">
        <h2 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent font-extrabold mb-8 text-center">
          Edit Profile
        </h2>

        <form className="space-y-6">
          <label className="block">
            <span className="block text-lg font-medium">First Name:</span>
            <input
              type="text"
              className="input input-bordered w-full p-2"
              placeholder="Enter your First Name"
              onChange={(e) => setfirstname(e.target.value)}
              value={firstName}
            />
          </label>

          <label className="block">
            <span className="block text-lg font-medium">Last Name:</span>
            <input
              type="text"
              className="input input-bordered w-full p-2"
              placeholder="Enter your Last Name"
              onChange={(e) => setlastName(e.target.value)}
              value={lastName}
            />
          </label>

          <label className="block">
            <span className="block text-lg font-medium">Email:</span>
            <input
              type="email"
              className="input input-bordered w-full p-2"
              placeholder="Enter your Email ID"
              onChange={(e) => setemail(e.target.value)}
              value={emailId}
            />
          </label>

          <label className="block">
            <span className="block text-lg font-medium">Photo URL:</span>
            <input
              type="text"
              className="input input-bordered w-full p-2"
              placeholder="Enter your Photo URL"
              value={photoUrl}
              onChange={(e) => setphotourl(e.target.value)}
            />
          </label>

          <label className="block">
            <span className="block text-lg font-medium">Age:</span>
            <input
              type="text"
              className="input input-bordered w-full p-2"
              placeholder="Enter your Age"
              onChange={(e) => setage(e.target.value)}
              value={age}
            />
          </label>

          <label className="block">
            <span className="block text-lg font-medium">Gender:</span>
            <select
              className="select select-primary w-full p-2"
              onChange={(e) => setgender(e.target.value)
            
              }value={gender}
            >
              <option disabled selected>
                Select your gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
          </label>

          <label className="block">
            <span className="block text-lg font-medium">About:</span>
            <textarea
              className="textarea textarea-primary w-full p-2"
              placeholder="Write about yourself"
              onChange={(e) => setabout(e.target.value)}
              value={about}
            />
          </label>

          <label className="block">
            <span className="block text-lg font-medium">Skills:</span>
            <textarea
              className="textarea textarea-primary w-full p-2"
              placeholder="Mention your skills"
              onChange={(e) => setskills(e.target.value)}
              value={skills}
            />
          </label>
          <div>
           <button className="btn bg-blue-500 " type="submit" onClick={saveProfile}>Save Profile</button>

          </div>
          
        </form>
      </div>
    </div>
    <div className='w-1/2 p-10'> <UserCard user={{firstName,lastName,emailId,age,gender,about,skills,photoUrl

}}/></div>
  {(
    <div className="toast toast-top toast-center">
  
          <div className="alert alert-success">
                     <span>Saved Profile successfully.</span>
          </div>
</div>)}

    
    </div>
  );
};

export default Editprofile;
