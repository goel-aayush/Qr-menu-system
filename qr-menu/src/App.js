import Home from './screen/Home';
import Login from './screen/Login';
import CreateUser from './screen/CreateUser';
import { ToastContainer} from 'react-toastify'
import {
  BrowserRouter as Router,
  Routes,
  Route,
}
  from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
      <div >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/createuser" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
