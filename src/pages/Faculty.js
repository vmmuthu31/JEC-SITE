import React from "react";
import UserCard from "../components/UserCard";
import "./Academic.css";
import { Grid } from "@material-ui/core";
import UserCardYellow from "../components/UserCardYellow";
import Customheader from "../components/Dynamic_header/Customheader";
import { Link } from "react-router-dom";

export default function Faculty() {
  return (
    <div>
      <Customheader path="" header="Faculty" />
      <div className="Faculty-div">
        <div className="faculty-top">
          <Grid className="space" container spacing={0}>
            <Grid item>
              <Link style={{ textDecoration: "none" }} to="/facultydetail">
                <UserCardYellow
                  name="	Mr.Kumaran M"
                  image="http://jec.ac.in/wp-content/uploads/2016/01/CSE_FACULTY_Details283.jpg"
                  designation="Head of the Department"
                ></UserCardYellow>
              </Link>
            </Grid>
          </Grid>
          <Grid className="space" container spacing={0}>
            <Grid item>
              <UserCard
                name="Mr. Sundararaju G"
                image="http://jec.ac.in/wp-content/uploads/2016/01/CSE_FACULTY_Details1001.jpg"
                designation="Associate Professor"
              ></UserCard>
            </Grid>
            <Grid item>
              <UserCard
                name="Mr. Manimaran A"
                image="http://jec.ac.in/wp-content/uploads/2016/01/CSE_FACULTY_Details644.jpg"
                designation="Associate Professor"
              ></UserCard>
            </Grid>
            <Grid item>
              <UserCard
                name="Mr.Subbiah A"
                image="http://jec.ac.in/wp-content/uploads/2016/01/CSE_FACULTY_Details1896.jpg"
                designation="Associate Professor"
              ></UserCard>
            </Grid>
          </Grid>
          <Grid container className="space" spacing={0}>
            <Grid item>
              <UserCard
                name="Mr.Lin Eby Chandra J"
                image="http://jec.ac.in/wp-content/uploads/2016/01/CSE_FACULTY_Details750.jpg"
                designation="Assistant Professor"
              ></UserCard>
            </Grid>
            <Grid item>
              <UserCard
                name="Ms.Elluswamy Uvasakthi"
                image="http://jec.ac.in/wp-content/uploads/2016/01/CSE_FACULTY_Details1268.jpg"
                designation="Assistant Professor"
              ></UserCard>
            </Grid>
            <Grid item>
              <UserCard
                name="Mr Sam Kamalesan D"
                image="https://jec.ac.in/wp-content/uploads/2016/01/sam-kamalesan.png"
                designation="Assistant Professor"
              ></UserCard>
            </Grid>
          </Grid>
          <Grid container className="space" spacing={0}>
            <Grid item>
              <UserCard
                name="Mr. Iraniya Pandian M"
                image="http://jec.ac.in/wp-content/uploads/2016/01/CSE_FACULTY_Details1379.jpg"
                designation="Assistant Professor"
              ></UserCard>
            </Grid>
            <Grid item>
              <UserCard
                name="Ms. Mythily M"
                image="https://jec.ac.in/wp-content/uploads/2016/01/mythili.m.png"
                designation="Assistant Professor"
              ></UserCard>
            </Grid>
            <Grid item>
              <UserCard
                name="Mr. Murugesan S"
                image="http://jec.ac.in/wp-content/uploads/2016/01/CSE_FACULTY_Details1466.jpg"
                designation="Assistant Professor"
              ></UserCard>
            </Grid>
          </Grid>
          <Grid container className="space" spacing={0}>
            <Grid item>
              <UserCard
                name="Ms Kavitha S"
                image="http://jec.ac.in/wp-content/uploads/2016/01/CSE_FACULTY_Details1805.jpg"
                designation="Assistant Professor"
              ></UserCard>
            </Grid>
            <Grid item>
              <UserCard
                name="Mr. Sathish Kumar N"
                image="http://jec.ac.in/wp-content/uploads/2016/01/CSE_FACULTY_Details2362.jpg"
                designation="Assistant Professor"
              ></UserCard>
            </Grid>
            <Grid item>
              <UserCard
                name="Ms. Chandrakala R"
                image="http://jec.ac.in/wp-content/uploads/2016/01/chandrakala.jpg"
                designation="Assistant Professor"
              ></UserCard>
            </Grid>
          </Grid>
          <Grid container className="space" spacing={0}>
            <Grid item>
              <UserCard
                name="Ms. Vidhyasree V"
                image="http://jec.ac.in/wp-content/uploads/2016/01/vidhyashree.jpg"
                designation="Assistant Professor"
              ></UserCard>
            </Grid>
            <Grid item>
              <UserCard
                name="Ms. Hemalatha K"
                image="https://jec.ac.in/wp-content/uploads/2016/01/hemalatha.png"
                designation="Assistant Professor"
              ></UserCard>
            </Grid>
            <Grid item>
              <UserCard
                name="Ms. Vithya V T"
                image="https://jec.ac.in/wp-content/uploads/2016/01/vidhya.png"
                designation="Assistant Professor"
              ></UserCard>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
