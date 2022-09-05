import React from "react";
import CourseCard from "../components/CourseCard";
import { Grid } from "@material-ui/core";
import "./Programmes.css";
import Customheader from "../components/Dynamic_header/Customheader";
import { Link } from "react-router-dom";

const Programmes = () => {
  return (
    <div>
      <Customheader path="" header="Programmes Offered" />
      <div className="card-box">
        <a className="split" href="#ug">
          UG Programme
        </a>{" "}
        <a className="split" href="#pg">
          PG Programme
        </a>
        <div class="card-box1">
          <div class="card-header">
            <span className="headname">Programme </span>

            <select name="programme" id="programme">
              <option value="programme">UG Programme</option>
              <option value="programme">PG Programme</option>
            </select>
            <span className="headname">Regulation</span>
            <select name="Regulation" id="Regulation">
              <option value="Regulation">Regulation 2017</option>
              <option value="Regulation">Regulation 2013</option>
              <option value="Regulation">Regulation 2021</option>
            </select>
            <div className="cards">
              <div className="inner-cards">
                <h2 className="center">Curriculum</h2>{" "}
                <p>
                  <ul>
                    <li>
                      <span className="item">
                        {" "}
                        Software solution providers using various designing/
                        programming principle
                      </span>
                    </li>
                    <li>
                      <span className="item">
                        {" "}
                        Knowledge on emerging technologies
                      </span>
                    </li>
                    <li>
                      <span className="item">
                        {" "}
                        Gives insight into best practices followed in
                        industries, that are required for one to become a
                        successful entrepreneur.
                      </span>
                    </li>
                    <li>
                      <span className="item">
                        {" "}
                        Prepares them to Design and deliver software part of an
                        electronics-based solution for any industry on a longer
                        run{" "}
                      </span>
                    </li>
                    <li>
                      <span className="item">
                        Design and deliver software part of an automation
                        industry on a longer run
                      </span>
                    </li>
                    <li>
                      <span className="item">
                        {" "}
                        Building solutions for society needs.
                      </span>
                    </li>
                    <li>
                      <span className="item">
                        {" "}
                        Design hardware / network solution for any requirements
                      </span>
                    </li>
                    <li>
                      <span className="item">
                        {" "}
                        Provides ideas about futuristic network solution
                        providers
                      </span>
                    </li>
                    <li>
                      <span className="item">
                        {" "}
                        Good Basic Knowledge about Computer Engineering &
                        ManagementGood Basic Knowledge about Computer
                        Engineering & Management
                      </span>
                    </li>
                    <li>
                      <span className="item">
                        {" "}
                        Realizes his purpose of education.
                      </span>
                    </li>
                    <li>
                      <span className="item">
                        A strong understanding of how to approach problem when
                        stated incompletely{" "}
                      </span>
                    </li>
                    <li>
                      <span className="item">
                        {" "}
                        An engineer with a sound knowledge of all but limited to
                        curriculum engineering subjects
                      </span>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="center"> Courses</h1>

      <h1 className="course-name" id="ug">
        Under Graduates
      </h1>
      <div className="college-notes">
        <Link style={{ textDecoration: "none" }} to="/Notes">
          <p class="split-para">
            I-Year <span>II-Year</span>
          </p>
          <div className="align-programmes">
            <Grid container spacing={0}>
              <Grid item md={2}>
                <CourseCard
                  course_name="Semester-1"
                  subject1="1. HS8151 Communicative English"
                  subject2="2. MA8151 Engineering Mathematics"
                  subject3="3. PH8151 Engineering Physics"
                  subject4="4. CY8151 Engineering Chemistry"
                  subject5="5. GE8151 Problem Solving and Python Programming"
                  subject6="6. GE8152 Engineering Graphics"
                  subject7="7. GE8161 Problem Solving and Python Programming Laboratory"
                  subject8="8. BS8161Physics and Chemistry Laboratory
                  "
                ></CourseCard>
              </Grid>
              <Grid item md={2} id="programmes-card">
                <CourseCard
                  course_name="Semester-2"
                  subject1="1. HS8251	Technical English"
                  subject2="2. MA8251 Engineering Mathematics II"
                  subject3="3. PH8252 Physics for Information Science"
                  subject4="4. BE8255 Basic Electrical, Electronics and Measurement Engineering"
                  subject5="5. GE8291 Environmental Science and Engineering"
                  subject6="6. CS8251 Programming in C"
                  subject7="7. GE8261 Engineering Practices Laboratory"
                  subject8="8. CS8261 C Programming Laboratory"
                ></CourseCard>
              </Grid>
              <Grid item md={2} id="programmes-card">
                <CourseCard
                  course_name="Semester-3"
                  subject1="1. HS8151 Communicative English"
                  subject2="2. MA8151 Engineering Mathematics"
                  subject3="3. PH8151 Engineering Physics"
                  subject4="4. CY8151 Engineering Chemistry"
                  subject5="5. GE8151 Problem Solving and Python Programming"
                  subject6="6. GE8152 Engineering Graphics"
                  subject7="7. GE8161 Problem Solving and Python Programming Laboratory"
                  subject8="8. BS8161Physics and Chemistry Laboratory
                  "
                ></CourseCard>
              </Grid>
              <Grid item md={2} id="programmes-card">
                <CourseCard
                  course_name="Semester-4"
                  subject1="1. HS8151 Communicative English"
                  subject2="2. MA8151 Engineering Mathematics"
                  subject3="3. PH8151 Engineering Physics"
                  subject4="4. CY8151 Engineering Chemistry"
                  subject5="5. GE8151 Problem Solving and Python Programming"
                  subject6="6. GE8152 Engineering Graphics"
                  subject7="7. GE8161 Problem Solving and Python Programming Laboratory"
                  subject8="8. BS8161Physics and Chemistry Laboratory
                  "
                ></CourseCard>
              </Grid>
            </Grid>
          </div>

          <p id="no-decoration" class="split-para">
            III-Year <span>IV-Year</span>
          </p>
          <div className="align-programmes">
            <Grid container spacing={0}>
              <Grid item md={2}>
                <CourseCard
                  course_name="Semester-5"
                  subject1="1. HS8151 Communicative English"
                  subject2="2. MA8151 Engineering Mathematics"
                  subject3="3. PH8151 Engineering Physics"
                  subject4="4. CY8151 Engineering Chemistry"
                  subject5="5. GE8151 Problem Solving and Python Programming"
                  subject6="6. GE8152 Engineering Graphics"
                  subject7="7. GE8161 Problem Solving and Python Programming Laboratory"
                  subject8="8. BS8161Physics and Chemistry Laboratory
                  "
                ></CourseCard>
              </Grid>
              <Grid item md={2} id="programmes-card">
                <CourseCard
                  course_name="Semester-6"
                  subject1="1. HS8151 Communicative English"
                  subject2="2. MA8151 Engineering Mathematics"
                  subject3="3. PH8151 Engineering Physics"
                  subject4="4. CY8151 Engineering Chemistry"
                  subject5="5. GE8151 Problem Solving and Python Programming"
                  subject6="6. GE8152 Engineering Graphics"
                  subject7="7. GE8161 Problem Solving and Python Programming Laboratory"
                  subject8="8. BS8161Physics and Chemistry Laboratory
                  "
                ></CourseCard>
              </Grid>
              <Grid item md={2} id="programmes-card">
                <CourseCard
                  course_name="Semester-7"
                  subject1="1. HS8151 Communicative English"
                  subject2="2. MA8151 Engineering Mathematics"
                  subject3="3. PH8151 Engineering Physics"
                  subject4="4. CY8151 Engineering Chemistry"
                  subject5="5. GE8151 Problem Solving and Python Programming"
                  subject6="6. GE8152 Engineering Graphics"
                  subject7="7. GE8161 Problem Solving and Python Programming Laboratory"
                  subject8="8. BS8161Physics and Chemistry Laboratory
                  "
                ></CourseCard>
              </Grid>
              <Grid item md={2} id="programmes-card">
                <CourseCard
                  course_name="Semester-8"
                  subject1="1. HS8151 Communicative English"
                  subject2="2. MA8151 Engineering Mathematics"
                  subject3="3. PH8151 Engineering Physics"
                  subject4="4. CY8151 Engineering Chemistry"
                  subject5="5. GE8151 Problem Solving and Python Programming"
                  subject6="6. GE8152 Engineering Graphics"
                  subject7="7. GE8161 Problem Solving and Python Programming Laboratory"
                  subject8="8. BS8161Physics and Chemistry Laboratory
                  "
                ></CourseCard>
              </Grid>
            </Grid>
          </div>
        </Link>
      </div>
      <h1 className="course-name" id="pg">
        Post Graduates
      </h1>
      <p class="split-para">
        I-Year <span>II-Year</span>
      </p>
      <div className="align-programmes">
        <div className="college-notes">
          <Grid container spacing={0}>
            <Grid item md={2}>
              <CourseCard
                course_name="Semester-1"
                subject1="1. HS8151 Communicative English"
                subject2="2. MA8151 Engineering Mathematics"
                subject3="3. PH8151 Engineering Physics"
                subject4="4. CY8151 Engineering Chemistry"
                subject5="5. GE8151 Problem Solving and Python Programming"
                subject6="6. GE8152 Engineering Graphics"
                subject7="7. GE8161 Problem Solving and Python Programming Laboratory"
                subject8="8. BS8161Physics and Chemistry Laboratory
                  "
              ></CourseCard>
            </Grid>
            <Grid item md={2} id="programmes-card">
              <CourseCard
                id="CourseCard"
                course_name="Semester-2"
                subject1="1. HS8151 Communicative English"
                subject2="2. MA8151 Engineering Mathematics"
                subject3="3. PH8151 Engineering Physics"
                subject4="4. CY8151 Engineering Chemistry"
                subject5="5. GE8151 Problem Solving and Python Programming"
                subject6="6. GE8152 Engineering Graphics"
                subject7="7. GE8161 Problem Solving and Python Programming Laboratory"
                subject8="8. BS8161Physics and Chemistry Laboratory
                  "
              ></CourseCard>
            </Grid>
            <Grid item md={2} id="programmes-card">
              <CourseCard
                course_name="Semester-3"
                subject1="1. HS8151 Communicative English"
                subject2="2. MA8151 Engineering Mathematics"
                subject3="3. PH8151 Engineering Physics"
                subject4="4. CY8151 Engineering Chemistry"
                subject5="5. GE8151 Problem Solving and Python Programming"
                subject6="6. GE8152 Engineering Graphics"
                subject7="7. GE8161 Problem Solving and Python Programming Laboratory"
                subject8="8. BS8161Physics and Chemistry Laboratory
              "
              ></CourseCard>
            </Grid>
            <Grid item md={2} id="programmes-card">
              <CourseCard
                course_name="Semester-4"
                subject1="1. HS8151 Communicative English"
                subject2="2. MA8151 Engineering Mathematics"
                subject3="3. PH8151 Engineering Physics"
                subject4="4. CY8151 Engineering Chemistry"
                subject5="5. GE8151 Problem Solving and Python Programming"
                subject6="6. GE8152 Engineering Graphics"
                subject7="7. GE8161 Problem Solving and Python Programming Laboratory"
                subject8="8. BS8161Physics and Chemistry Laboratory
              "
              ></CourseCard>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Programmes;
