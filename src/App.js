import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import Users from './Pages/Users';
import Contact from './Pages/Contact';
import Profile from './Pages/Profile';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>


        <Route path="/" element={ <Home /> } />
        <Route path="/users" element={ <Users /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/details/:id" element={ <Profile /> } />

        </Routes>

    </div>
  );
}

export default App;
