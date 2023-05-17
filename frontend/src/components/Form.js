import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [programmingLanguage, setProgrammingLanguage] = useState("");
  const [about, setAbout] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(
      `Email: ${email}, Course: ${course}, Specialization: ${specialization}, Programming Language: ${programmingLanguage}, About: ${about}`
    );

  try {
    const response = await axios.post("http://localhost:3001/update-profile", {
      email,
      course,
      specialization,
      programmingLanguage,
      about
    });
    console.log(response.data);
    navigate("/UserDashBoard");
  } catch (error) {
    console.log(error.response.data);
  }
};

  return (
    <div className="specialisation_form">
      <h2 className="form_heading">LET'S MAKE YOUR PROFILE</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">email:</label>
          <input
            type="email"
            id="name"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="preferences">Prefrences</label>
          <select
            id="course"
            value={course}
            onChange={(event) => setCourse(event.target.value)}
            required
          >
            <option value="" disabled hidden>
              Choose Course
            </option>
            <option value="btech">B.Tech</option>
            <option value="mtech">M.Tech</option>
            <option value="bsc">B.Sc</option>
            <option value="msc">M.Sc</option>
          </select>
        </div>

        <div className="form-group">
          <select
            id="prefrences"
            value={specialization}
            onChange={(event) => setSpecialization(event.target.value)}
            required
          >
            <option value="" disabled hidden>
              Choose Specialisation
            </option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="app-dev">App Development</option>
            <option value="android-dev">Android Development</option>
            <option value="cloud-computing">Cloud Computing</option>
            <option value="ai-ml">AI/ML</option>
          </select>
        </div>
        <div className="form-group">
          <select
            id="language"
            value={programmingLanguage}
            onChange={(event) => setProgrammingLanguage(event.target.value)}
            required
          >
            <option value="" disabled hidden>
              Choose language
            </option>
            <option value="cpp">C++</option>
            <option value="c">C</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="js">Javascript</option>
            <option value="ruby">Ruby</option>
            <option value="swift">Swift</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="about">About:</label>
          <textarea
            id="about"
            value={about}
            onChange={(event) => setAbout(event.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
