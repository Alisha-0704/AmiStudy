import Welcome from "../components/Welcome";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Chat from "../components/ChattingPage";
import Dashboard from "./Dashboard";
import AccountForm from "../components/AccountForm";
import Userlogin from "../components/Userlogin";
import About from "../components/About";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <AccountForm />
      <Welcome />
      <Dashboard />
      <Form />
      <Chat />
      <Userlogin />
      <About />
    </>
  );
};
export default Homepage;
