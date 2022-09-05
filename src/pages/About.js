import IIC from "../images/IIC_logo.png";
import background from "../images/background.jpeg";
import JEC from "../images/JEC_logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../components/About_data";
import "./About.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Header from "../components/Header";
import Type from "./Type";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
// const countEl = document.getElementById("count");
// updateVisitCount();
// function updateVisitCount() {
//   fetch("https://api.countapi.xyz/update/localhost/muthu?amount=1")
//     .then((res) => res.json())
//     .then((res) => {
//       countEl.innerHTML = res.value;
//     });
// }

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 3,
  // infinite={false}
  // slidesToScroll={3}
  centerMode: true,
  centerPadding: "170px",
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const Card = ({ item }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        className="multi__image"
        src={item}
        alt=""
        style={{
          width: "100%",
          height: "170px",
          objectFit: "contain",
          marginBottom: "10px",
        }}
      />
    </div>
  );
};

const About = () => {
  return (
    <div>
      <Header />
      <div className="About-div">
        <div class="container">
          <img class="card1" src={background} alt="background" />
          <div class="jec">
            {" "}
            <p class="head">
              JAYA ENGINEERING COLLEGE{" "}
              <p class="desc">
                Affiliated to Anna University, Chennai Approved by AICTE, New
                Delhi <br /> A Telugu Minority Institute{" "}
              </p>{" "}
              <p class="dept">
                DEPARTMENT OF <br />
                Computer Science Engineering
              </p>
            </p>{" "}
            <img class="logo" src={JEC} alt="logo" />
            <img class="iic_logo" src={IIC} alt="iic" />
          </div>{" "}
        </div>
        <div class="vm">
          <h1>
            {" "}
            ABOUT THE DEPARTMENT <br />{" "}
          </h1>{" "}
          <p class="card-content">
            &#8226; The Department of Computer Science and Engineering (CSE) was
            established in the year 1995 with the mission to educate students
            from all over India, including those from rural areas, so that they
            become enlightened individuals, improving the living standards of
            their Families, Industry and Society.
            <br />
            <br />
            &#8226; CSE shares the mission and vision of the institute in
            imparting high quality education to the students and The department
            is accredited by the National Board of Accreditation (NBA) in the
            year 2006 and 2011.
            <br />
            <br />
            &#8226; The Department has the state-of-the-art facilities for
            various laboratories, a well-equipped seminar hall, Wi-Fi enabled
            class rooms to support e-Learning, and a department library. We also
            have facility for Anna University EDUSAT program.
            <br />
            <br />
            &#8226; The Department of Computer Science and Engineering, with a
            collective experience of teaching 2400 students and 28,800 man-hours
            supported by the team of 6 technical experts from Modern Technology
            and Technique promotion Council with 28 faculty members. The
            department has enough power to deliver the ambitious requirement of
            producing a complete engineer.
            <br />
            <br />
            &#8226; The computing facilities consists of 16 Mpbs OFC backbone
            with 1025 Intel systems on hierarchical topology with a watch guard
            firewall running on Ubuntu 15.4 and Fedora with more than 100 tools
            installed enough for a modern incubation centre of industry
            standards.
            <br />
            <br />
          </p>{" "}
          <h1>
            {" "}
            VISION AND MISSION <br />{" "}
          </h1>{" "}
          <p class="card-content">
            &#8226; To build Integrated Human Beings who can define tomorrow’s
            requirement and provide innovative solutions to it.
          </p>{" "}
          <div className="Hitcount">
            <h1 id="count">
              <span class="cr_count_site_pv"></span>
            </h1>

            <h5>Hit Count</h5>
          </div>
        </div>
        <div>
          <h2 class="desc3">Get a Look Into Here</h2>
          <div style={{ margin: "30px" }} className="carousel"></div>
          <div style={{ margin: "30px" }} className="carousel">
            <Slider {...carouselProperties}>
              {data.map((item) => (
                <Card item={item} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
