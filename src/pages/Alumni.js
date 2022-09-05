import React, { useState } from "react";
import "./Alumni.css";
import Customheader from "../components/Dynamic_header/Customheader";
import axios from "axios";

const Alumni = () => {
  const [state, setState] = useState({
    aluminis: [],
  });
  const api = axios.create({
    baseURL: `http://127.0.0.1:8000/api/alumni/`,
  });
  api.get("/").then((res) => {
    setState({ aluminis: res.data });
  });
  return (
    <div>
      <Customheader path="" header="Alumini" />

      <div className="Alumini-div">
        <div class="alumini-container ">
          <label class="textOverImage">
            <input type="checkbox" />
            <h2>Bharath Raj</h2>

            <div>
              Age: 24
              <br />
              Date Of Birth: 22.07.00
              <br />
              Reg No: 110820184046
              <br />
              Batch: 2018-21
              <br />
              Company: Deloitte
              <br />
              Position: Software Developer
              <br />
              Experience: 2 years
              <br />
            </div>
          </label>
        </div>
        <div class="alumini-container ">
          <label class="textOverImage">
            <input type="checkbox" />
            <h2>Bharath Raj</h2>

            <div>
              Age: 24
              <br />
              Date Of Birth: 22.07.00
              <br />
              Reg No: 110820184046
              <br />
              Batch: 2018-21
              <br />
              Company: Deloitte
              <br />
              Position: Software Developer
              <br />
              Experience: 2 years
              <br />
            </div>
          </label>
        </div>
        <div class="alumini-container ">
          <label class="textOverImage">
            <input type="checkbox" />
            <h2>Bharath Raj</h2>

            <div>
              Age: 24
              <br />
              Date Of Birth: 22.07.00
              <br />
              Reg No: 110820184046
              <br />
              Batch: 2018-21
              <br />
              Company: Deloitte
              <br />
              Position: Software Developer
              <br />
              Experience: 2 years
              <br />
            </div>
          </label>
        </div>
        <div class="alumini-container ">
          <label class="textOverImage">
            <input type="checkbox" />
            <h2>Bharath Raj</h2>

            <div>
              Age: 24
              <br />
              Date Of Birth: 22.07.00
              <br />
              Reg No: 110820184046
              <br />
              Batch: 2018-21
              <br />
              Company: Deloitte
              <br />
              Position: Software Developer
              <br />
              Experience: 2 years
              <br />
            </div>
          </label>
        </div>
        <div class="alumini-container ">
          <label class="textOverImage">
            <input type="checkbox" />
            <h2>Bharath Raj</h2>

            <div>
              Age: 24
              <br />
              Date Of Birth: 22.07.00
              <br />
              Reg No: 110820184046
              <br />
              Batch: 2018-21
              <br />
              Company: Deloitte
              <br />
              Position: Software Developer
              <br />
              Experience: 2 years
              <br />
            </div>
          </label>
        </div>
        <div class="alumini-container ">
          <label class="textOverImage">
            <input type="checkbox" />
            <h2>Bharath Raj</h2>

            <div>
              Age: 24
              <br />
              Date Of Birth: 22.07.00
              <br />
              Reg No: 110820184046
              <br />
              Batch: 2018-21
              <br />
              Company: Deloitte
              <br />
              Position: Software Developer
              <br />
              Experience: 2 years
              <br />
            </div>
          </label>
        </div>
      </div>
      <div className="Alumini-div">
        {state.aluminis.map((alumini) => (
          <div key={alumini.id} class="alumini-container ">
            <label class="textOverImage">
              <input type="checkbox" />
              <h2>{alumini.student.name}</h2>

              <div>
                {alumini.student.age}
                <br />
                Date Of Birth: {alumini.student.dob}
                <br />
                Reg No: {alumini.student.roll_no}
                <br />
                Batch: {alumini.student.batch}
                <br />
                {alumini.works.company}
                <br />
                {alumini.works.position}
                <br />
                {alumini.works.duration}
                <br />
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumni;
