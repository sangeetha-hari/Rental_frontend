import './App.css';
import Appbar from './components/Appbar';
import Login from './components/Login';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <Appbar/>

     <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/home" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/item/electronics" element={<Login />}/>
     </Routes>
    </div>
  );
}

export default App;
