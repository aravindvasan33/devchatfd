import React, { useState } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles'; // Optional for extended customization
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [emailId, setemailId] = useState("sofiasona@gmail.com");
  const [password, setpassword] = useState("SOFIAsona33$");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault(); 
    setError(null); 
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:7000/login", { emailId, password }, { withCredentials: true });
      dispatch(addUser(res.data)); 
      navigate("/feed");
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Something Went Wrong!!";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Particles.js Configuration
  const particlesOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { enable: true, speed: 2, direction: "none", random: false, straight: false },
    },
    detectRetina: true,
  };

  return (
    <div className="relative h-screen w-screen bg-gray-900">
      {/* Particles.js Background */}
      <Particles
        id="tsparticles"
        options={particlesOptions}
        init={loadFull}
        className="absolute inset-0 -z-10"
      />

      <div className="flex justify-center items-center h-full">
        <div className="btn1 card card-side bg-base-300 max-w-prose w-full m-4">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-2 flex justify-center"
          >
            <Tilt
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...
                rounded-2xl  min-h-32  flex items-center flex-col"
              glareColor="#A91079"
              glareEnable={true}
              gyroscope={true}
              glareBorderRadius="20px"
              glareMaxOpacity={0.5}
              glarePosition="all"
              perspective={500}
              style={{ transformStyle: "preserve-3d" }}
            >
              <figure>
                <img className="w-60 h-72" src="./log.png" alt="Login form" />
              </figure>
            </Tilt>
          </motion.div>

          <div className="card-body">
            <h1 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent font-extrabold">
              Sign In
            </h1>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Email"
                value={emailId}
                onChange={(e) => setemailId(e.target.value)}
              />
            </label>
            
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                value={password}
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </label>
            <p className="text-red-600">{error}</p>
            <button
              className={`btn1 relative rounded-full glass h-10 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
