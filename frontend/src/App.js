
import Homepage from "./pages/Homepage.js";
import Dashboard from "./pages/Dashboard.js";
import AccountForm from "./components/AccountForm.js";
import Sign from "./components/Sign.js";
//import Login from "./pages/Login.js";
import Navbar from "./components/Navbar.js";
// import Userlogin from "./components/Userlogin.js";
// import SimpleComponent from "./pages/SimpleComponent.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    {/* <SimpleComponent /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" elemnt={<AccountForm />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
