import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";//it is provided reactredux 
import store from "./utils/appStore";
import Feed from "./components/Feed";
import Requests from "./components/Requests";
import Connections from "./components/Connections";
function App() { 
  return (
    <Provider store={store}>
       <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="feed" element={<Feed/>}/>
          <Route path="login" element={<Login />} /> 
          <Route path="profile" element={<Profile />}/>          
          <Route path="connections" element={<Connections/>} /> 
          <Route path="requests" element={<Requests/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
      
  
    
  );
}

export default App;
