import './App.css';
import { SideNavbar } from './Components/Navbar/Navbar';
import { Profile } from './Components/Profile/Profile';
import { Login } from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <SideNavbar>
      <Login/>
        <Profile/>      
      </SideNavbar>           
    </div>
  );
}

export default App;
