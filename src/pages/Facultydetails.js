import Customheader from "../components/Dynamic_header/Customheader";
import "./Facultydetails.css";

export default function Facultydetails() {
  return (
    <div>
      <Customheader path="" header="Faculty Details" />
      <div>
        <img
          src="http://jec.ac.in/wp-content/uploads/2016/01/CSE_FACULTY_Details283.jpg"
          className="faculty-pic"
          alt=""
        />
        <div className="faculty-details">
          <p>Mr. Kumaran M</p>
          <p>Head of the Department, CSE</p>
          <a
            href="https://jec.ac.in/wp-content/uploads/2016/01/kumaran.pdf"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <button className="fbio-data">
              Bio-Data <span className="arrow-size">&#x2193;</span>{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
