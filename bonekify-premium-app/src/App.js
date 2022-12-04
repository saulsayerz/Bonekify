import Navbar from "./templates/Navbar";
import UnAuth from "./templates/UnAuth";
import Penyanyi from "./Penyanyi";
import Login from "./Login";
import Register from "./Register";
import Admin from "./Admin";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Cookies from "universal-cookie";

const cookies = new Cookies();

function App() {

  let loggedIn = false
  let isAdmin = false
  
  if (cookies.get('isAdmin_premium') !== undefined){
    loggedIn = true
    if (cookies.get('isAdmin_premium') === '1'){
      isAdmin = true
    } 
  }

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/penyanyi" element={loggedIn && !isAdmin ? <div><Navbar/> <Penyanyi/></div> : <UnAuth />}/>
          <Route path="/" element={!loggedIn ? <Login/> : (isAdmin ? <div><Navbar/><Admin/></div> : <div><Navbar/> <Penyanyi/></div>)}/>
          <Route path="/register" element={loggedIn ? <UnAuth /> : <Register/>}/>
          <Route path="/admin" element={loggedIn && isAdmin ? <div><Navbar/><Admin/></div> : <UnAuth />}/>
          <Route path="*" element={<UnAuth />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
