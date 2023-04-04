import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Userlogin";
import Navbar from "./components/Navbar";
import Signup from "./components/AccountForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" elemnt={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
