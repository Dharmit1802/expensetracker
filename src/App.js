import { Route, Routes } from 'react-router-dom';

import Landing from './components/Landing';
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div classname="h-[100vh] w-[100vw] bg-gray-500">
      
      <Routes>

        {/* <Route path='/' element={<Landing></Landing>}></Route> */}

        <Route path='/dashboard' element={
        <PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>
        }></Route>

        <Route path='/' element={<Login></Login>}></Route>

        <Route path='/signup' element={<Signup></Signup>}></Route>

      </Routes>
    </div>
  );
}

export default App;
