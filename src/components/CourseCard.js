import React from "react";
import "./CourseCard.css";

function CourseCard(props) {
  return (
    <div className="card-container">
      <header>
        <h1 className="bold-text1">{props.course_name}</h1>
      </header>
      <ul>
        <li className="normal-text2">{props.subject1}</li>
      </ul>
      <ul>
        <li className="normal-text2">{props.subject2}</li>
      </ul>
      <ul>
        <li className="normal-text2">{props.subject3}</li>
      </ul>
      <ul>
        <li className="normal-text2">{props.subject4}</li>
      </ul>
      <ul>
        <li className="normal-text2">{props.subject5}</li>
      </ul>
      <ul>
        <li className="normal-text2">{props.subject6}</li>
      </ul>
      <ul>
        <li className="normal-text2">{props.subject7}</li>
      </ul>
      <ul>
        <li className="normal-text2">{props.subject8}</li>
      </ul>
      <ul>
        <li className="normal-text2">{props.subject9}</li>
      </ul>
    </div>
  );
}

export default CourseCard;
