// import React from "react";
// import { useEffect, useState } from "react";
// import "./Navbar.css";
// import logo from "../images/LOGO.png";

// const Navbar = () => {
//   const [show, handleShow] = useState(false);
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 100) {
//         handleShow(true);
//       } else handleShow(false);
//     });
//     return () => {
//       window.removeEventListener("scroll", null);
//     };
//   }, []);

//   return (
//     <>
//       <div className={`nav ${show && "nav_white"}`}>
//         <div className="logos">
//           <img className="logo" src={logo} alt="loading" />
//         </div>

//         <div className="options">
//           <button className="but">Match</button>
//           <button className="but">About</button>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Navbar;
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../images/LOGO.png";
import bellIcon from "../images/bell_icon.png";

const NotificationBell = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  return (
    <div className="notification-bell" onClick={handleNotificationClick}>
      <img src={bellIcon} alt="Notification Bell" />
      {showNotification && <div className="notification-badge"></div>}
    </div>
  );
};

const Navbar = () => {
  const [show, handleShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`nav ${show && "nav_white"}`}>
        <div className="logos">
          <img className="logo" src={logo} alt="loading" />
        </div>

        <div className="options">
          <button className="but">Match</button>
          <button className="but">About</button>
          <NotificationBell />
        </div>
      </div>
    </>
  );
};

export default Navbar;
