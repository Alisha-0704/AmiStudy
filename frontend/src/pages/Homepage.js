import Welcome from "../components/Welcome.js";
import Navbar from "../components/Navbar.js";
import Form from "../components/Form.js";
import Chat from "../components/ChattingPage.js";
import Dashboard from "./Dashboard.js";
import AccountForm from "../components/AccountForm.js";
import Userlogin from "../components/Userlogin.js";
import About from "../components/About.js";
import "./Homepage.css";
const Homepage = () => {
  return (
    <div className="home">
      <div className="homepage">
       <Navbar/>
        <Userlogin />
      </div>
      <AccountForm />
      <Welcome />
      <Dashboard />
      <Form />
      {/* <Chat /> */}

      <About />
    </div>
  );
};
export default Homepage;
