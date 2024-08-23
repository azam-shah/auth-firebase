import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import Privateroute from './Components/Privateroute';
import { Navigate, Route , Routes } from "react-router-dom"

function App() {

  const isLoggedIn = () =>{
    return localStorage.getItem('authToken') !==null;
  }

  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element = { <Signup/> }/>
        <Route path='/Login' element = { isLoggedIn() ? <Navigate to = "./Home" /> : <Login/>  }/>
        <Route path='/Home' element = {<Privateroute> <Home/> </Privateroute>}/>
      </Routes>
     
    </div>
  );
}

export default App;
