import './App.css';
import Appbar from './components/Appbar';
import Login from './components/Login';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import DisplayItems from './components/DisplayItems';
import AdminLogin from './components/AdminLogin';

function App() {
  return (
    <div className="App">
     <Appbar/>

     <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/home" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/adminlogin" element={<AdminLogin />}/>
      <Route path="/item/electronic" element={<DisplayItems  item_type={"001"}/>}/>
      <Route path="/item/furniture" element={<DisplayItems  item_type={"002"}/>}/>
      <Route path="/item/others" element={<DisplayItems  item_type={"003"}/>}/>
     </Routes>
    </div>
  );
}

export default App;
