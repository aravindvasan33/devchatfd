import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionSlice';

const Connections = () => {
  const connections = useSelector((store) => store.connections||[]); // Redux handles default state as an array
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get("http://localhost:7000/user/connections", { withCredentials: true });
      if (res.data && res.data.data) {
        dispatch(addConnections(res.data.data));
        console.log(res.data.data.firstName); // Log connections data to verify the fetched result
      }
    } catch (err) {
      console.error("Failed to fetch connections:", err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);


  return (
    <div className="flex justify-center m-4">
      <div className="bg-base-300 m-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent font-extrabold mb-8 text-center">
        Connections
      </div>
      {connections.length > 0 ? (
        connections.map((connection, index) => (
          <div key={index}>
            {connection.firstName}
          </div>
        ))
      ) : (
        <h1>No Connections Found!</h1>
      )}
    </div>
  );
};

export default Connections;
