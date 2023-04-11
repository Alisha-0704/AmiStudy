import React from "react";
import "./About.css";
import shreimg from "../images/shreya_mishra.png";
import alishaimg from "../images/Alisha.png";
import palakimg from "../images/palak.png";
import riyaimg from "../images/Riya.png";
import ayushiimg from "../images/Ayushi_lal.png";

const members = [
  {
    name: "Shreya Misha",
    role: "Frontend Developer",
    image: shreimg,
  },
  {
    name: "Palak",
    role: "Frontend Developer",
    image: palakimg,
  },
  {
    name: "Alisha ",
    role: "Backend Developer",
    image: alishaimg,
  },
  {
    name: "Riya",
    role: "Backend Developer",
    image: riyaimg,
  },
  {
    name: "Ayushi Lal",
    role: "Developer",
    image: ayushiimg,
  },
];

const About = () => (
  <div id="about_id" className="about">
    <h1>Our Team</h1>
    <div className="all_membercard">
      {members.map((member) => (
        <div className="member-card" key={member.name}>
          <img className="member-image" src={member.image} alt={member.name} />
          <h2 className="member-name">{member.name}</h2>
          <h3 className="member-role">{member.role}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default About;
