import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import "./Dashboard.css";
import shreimg from "../images/shreya_mishra.png";
import alishaimg from "../images/Alisha.jpg";
import palakimg from "../images/palak.jpg";
import riyaimg from "../images/Riya.jpg";
import ayushiimg from "../images/Ayushi_lal.jpg";

const db = [
  {
    name: "Shreya Mishra",
    url: shreimg,
    about: "I love to explore and learn",
  },
  {
    name: "Alisha Kushwaha",
    url: alishaimg,
    about: "I love to explore and learn",
  },

  {
    name: "Ayushi Lal",
    url: ayushiimg,
    about: "I love to explore and learn",
  },
  {
    name: "Riya",
    url: riyaimg,
    about: "I love to explore and learn",
  },
  {
    name: "Palak",
    url: palakimg,
    about: "I love to explore and learn",
  },
];

function Dashboard() {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);

    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div className="Dashboard_Main" id="dashboard_id">
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <div className="cardContainer_outer">
        <h1>Profile Card</h1>
        <div className="cardContainer">
          {db.map((character, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name, index)}
              onCardLeftScreen={() => outOfFrame(character.name, index)}
            >
              <div className="card_perimg">
                <div className="img_container">
                  <img
                    className="cardsimg"
                    src={character.url}
                    alt={character.name}
                  ></img>
                </div>
                <h3 className="card_pername">{character.name}</h3>
                <p className="card_perabout">{character.about}</p>
              </div>
            </TinderCard>
          ))}
        </div>
        <div className="buttons">
          <button
            style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
            onClick={() => swipe("left")}
          >
            Maybe next time
          </button>
          <button
            style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
            onClick={() => goBack()}
          >
            Reconsider the profile
          </button>
          <button
            style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
            onClick={() => swipe("right")}
          >
            Let's study
          </button>
        </div>

        {lastDirection ? (
          <h2 key={lastDirection} className="infoText">
            You selected {lastDirection} option
          </h2>
        ) : (
          <h2 className="infoText">
            Select or press a button to get Restore Card button visible!
          </h2>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
