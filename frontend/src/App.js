
import Welcome from "./components/Welcome.js";
import Homepage from "./pages/Homepage.js";
import UserDashBoard from "./pages/UserDashBoard.js";
import AccountForm from "./components/AccountForm.js";
import Form from "./components/Form.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/main.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/UserDashBoard" element={<UserDashBoard />} />
        <Route path="/signup" element={<AccountForm />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
