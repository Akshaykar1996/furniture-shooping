import logo from './logo.svg';
import './App.css';
import { SideNavbar } from './Components/Navbar/Navbar';
import { Profile } from './Components/Profile/Profile';
import { Login } from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      {/* <SideNavbar>
        <Profile/>      
      </SideNavbar> */}      
       <Login/>
    </div>
  );
}

export default App;
