// import React, { useState } from "react";
// import "./Form.css";

// const Form = () => {
//   const [name, setName] = useState("");
//   const [preferences, setPreferences] = useState("");
//   const [about, setAbout] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Name: ${name}, Preferences: ${preferences}, About: ${about}`);
//     // replace console.log with your own form submission logic
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form">
//       <div className="form-group">
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="preferences">Preferences:</label>
//         <input
//           type="text"
//           id="preferences"
//           value={preferences}
//           onChange={(event) => setPreferences(event.target.value)}
//           required
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="about">About:</label>
//         <textarea
//           id="about"
//           value={about}
//           onChange={(event) => setAbout(event.target.value)}
//           required
//         />
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Form;
import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [preferences, setPreferences] = useState("");
  const [course, setCourse] = useState("");
  const [language, setLanguage] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Name: ${name}, Specialization: ${preferences}, Course: ${course}, About: ${about}`
    );
    // replace console.log with your own form submission logic
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
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
          <option value="" selected disabled hidden>
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
          value={preferences}
          onChange={(event) => setPreferences(event.target.value)}
          required
        >
          <option value="" selected disabled hidden>
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
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
          required
        >
          <option value="" selected disabled hidden>
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
  );
};

export default Form;
