import './App.css';
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom"

//importing pages
import ApplyShare from './pages/applyShare';
import Sidebar from './components/Sidebar';
import CheckResult from './pages/checkResult';
import Login from './pages/login';
import Manage from './pages/Manage';
import Home from './pages/home';

import "@arco-design/web-react/dist/css/arco.css";
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <div className='app-wrapper'>
          <BrowserRouter>
          <Sidebar />
          <Outlet />
          <div className='main'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/apply' element={<ApplyShare />} />
              <Route path='/result' element={<CheckResult />} />
              <Route path='/manage' element={<Manage />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
