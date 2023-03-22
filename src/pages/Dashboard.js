import TinderCard from "react-tinder-card";
import { useState } from "react";
import { animated, config, interpolate, useSpring } from "@react-spring/web";
import "./Dashboard.css";

const Dashboard = () => {
  const characters = [
    {
      name: "Richard Hendricks",
      url: "https://www.google.com/search?q=images&rlz=1C1CHBF_enIN965IN965&sxsrf=AJOqlzXhBA5jv8FIO0O2DeEuKgnqwSMF3w:1679421674609&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiAjd-ize39AhUfU_UHHQWOCiIQ_AUoAXoECAEQAw&biw=788&bih=738&dpr=1.25#imgrc=9SPhZ2nyEGps3M",
    },
    {
      name: "Erlich Bachman",
      url: "./img/erlich.jpg",
    },
    {
      name: "Monica Hall",
      url: "./img/monica.jpg",
    },
    {
      name: "Jared Dunn",
      url: "./img/jared.jpg",
    },
    {
      name: "Dinesh Chugtai",
      url: "./img/dinesh.jpg",
    },
  ];

  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="dashboard">
      {/* <ChatContainer/> */}
      <div className="swiper-container">
        <div className="card-container">
          {characters.map((character) => (
            <div key={character.name}>
              <TinderCard
                className="swipe"
                onSwipe={(dir) => swiped(dir, character.name)}
                onCardLeftScreen={() => outOfFrame(character.name)}
              >
                <div
                  style={{ backgroundImage: "url(" + character.url + ")" }}
                  className="card"
                >
                  <h3>{character.name}</h3>
                </div>
              </TinderCard>
              <div className="swipe-info">
                {lastDirection ? <p> You swiped {lastDirection} </p> : <p />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
