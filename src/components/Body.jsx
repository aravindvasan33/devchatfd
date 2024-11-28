import React, { useEffect } from 'react';
import NavBar from './NavBar';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData) return;
    try {
      // Update the endpoint based on your backend route configuration
      const response = await axios.get("http://localhost:7000/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(response.data));
    } catch (err) {
      if (err.response && err.response.status === 401) {
        navigate("/login");
        console.error("Unauthorized access, redirecting to login:", err);
      } else {
        console.error("Error fetching user:", err);
      }
    }
  };;

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
