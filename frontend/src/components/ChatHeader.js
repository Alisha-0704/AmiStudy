// import React from 'react'

// function ChatHeader() {
//   return (
//     <>
//         <div className='chat_head'>
//             <div className='userprofile'>

//             </div>
//         </div>
//     </>
//   )
// }

// export default ChatHeader

import { useCookies } from "react-cookie";
import React from "react";
import "./ChatHeader.css";
import ali from "../images/Alisha.jpg";
const ChatHeader = () => {
  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          <img className="images_cont" src={ali} alt={" shreya "} />
        </div>
        <h3 className="img_username">shreya</h3>
      </div>
      {/* <i className="log-out-icon" onClick={logout}>
        ⇦
      </i> */}
    </div>
  );
};

export default ChatHeader;
