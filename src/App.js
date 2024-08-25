import logo from './logo.svg';
import './App.css';
import { SideNavbar } from './Components/Navbar/Navbar';
import { Profile } from './Components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <SideNavbar>
        <Profile/>
      </SideNavbar>
    </div>
  );
}

export default App;
