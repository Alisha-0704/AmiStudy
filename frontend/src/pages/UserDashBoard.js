import Navbar from "../components/Navbar.js";
import Dashboard from "./Dashboard.js";
import About from "../components/About.js";
import "./Homepage.css";


const Userdashboard = () => {
    return (
        <div className="Dashboard_Main">
            <Navbar />
            <Dashboard />
            <About />
        </div>
    );
};
export default Userdashboard;
