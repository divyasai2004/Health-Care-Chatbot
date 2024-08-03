import Register from './container/Register/Register';
import Login from './container/login/Login';
import Homepage from './container/homepage/HomePage';
import './App.css';
// import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <div>
   
     <Routes>
        <Route exact path="/Register" Component={Register}/>
        <Route path="/login" Component={Login}/>
        <Route path="/homepage" Component={Homepage}/>
        <Route Component={Error} />
      </Routes>
      
    
      
     
    </div>
    </>
    
  );
}

export default App;

