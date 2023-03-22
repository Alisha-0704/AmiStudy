import React from 'react';
import './About.css';

const members = [
  {
    name: 'Shreya Misha',
    role: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Palak',
    role: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Alisha ',
    role: 'Backend Developer',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    name: 'Riya',
    role: 'Backend Developer',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    name: 'Ayushi Lal',
    role: 'Project Manager',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  }
];

const About = () => (
  <div className="about">
    <h1>Our Team</h1>
    {members.map(member => (
      <div className="member-card" key={member.name}>
        <img className="member-image" src={member.image} alt={member.name} />
        <h2 className="member-name">{member.name}</h2>
        <h3 className="member-role">{member.role}</h3>
      </div>
    ))}
  </div>
);

export default About;
