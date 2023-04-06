import Welcome from "../components/Welcome";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Chat from "../components/ChattingPage";
import Dashboard from "./Dashboard";
import AccountForm from "../components/AccountForm";
import Userlogin from "../components/Userlogin";
import About from "../components/About";
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
      <Chat />

      <About />
    </div>
  );
};
export default Homepage;
