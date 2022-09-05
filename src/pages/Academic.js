import React from "react";
import UserCard from "../components/UserCard";
import "./Academic.css";
import { Grid } from "@material-ui/core";
import Customheader from "../components/Dynamic_header/Customheader";
import UserCardYellow from "../components/UserCardYellow";

const Academic = () => {
  return (
    <div>
      <Customheader path="" header="Academic Council" />
      <div className="academic-council-div">
        <h2 id="members">Members</h2>
        <div className="column-div">
          <Grid className="space" container spacing={0}>
            <Grid item>
              <UserCardYellow
                name="	Mr.Kumaran M"
                image="http://jec.ac.in/wp-content/uploads/2016/01/CSE_FACULTY_Details283.jpg"
                designation="Head of the Department"
              ></UserCardYellow>
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
        </div>
        <h2 id="members">Meetings</h2>
        <div class=" card-in">
          <p class="split-parag">
            Title <span>Date: dd/mm/yyyy</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit id nec
            cursus feugiat semper nisl. Nisl orci dis porttitor dui. Sed turpis
            mattis enim et egestas elit felis mattis. Pretium ultricies at
            eleifend accumsan consequat, risus nascetur nunc, interdum. Accumsan
            sit arcu, id cras id in amet. Urna, turpis proin sapien netus et et
            placerat sit neque. Blandit felis, velit senectus sed aliquam nibh
            purus egestas pharetra. Bibendum leo vulputate velit vel in id.
            Egestas massa quis nisi, semper. Massa feugiat tincidunt nam metus,
            quam. Rhoncus et, hendrerit non, eget viverra dignissim sagittis
            porttitor eu. Nec, tellus integer condimentum tristique tristique
            morbi nibh dictumst. Quisque egestas purus donec lacus, neque nibh
            rhoncus neque purus. Quis sit non amet nisl, porta eu gravida. Lorem
            vulputate fermentum semper quis facilisi elit parturient eros, in.
            Dui euismod amet, potenti ac nibh in quis pretium tristique. Nunc id
            lectus amet dictumst sed. Eros etiam nulla orci amet magna
            vestibulum condimentum. Aenean pretium ac pharetra eu pharetra,
            egestas sed.
          </p>
        </div>
        <div class=" card-in">
          <p class="split-parag">
            Title <span>Date: dd/mm/yyyy</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit id nec
            cursus feugiat semper nisl. Nisl orci dis porttitor dui. Sed turpis
            mattis enim et egestas elit felis mattis. Pretium ultricies at
            eleifend accumsan consequat, risus nascetur nunc, interdum. Accumsan
            sit arcu, id cras id in amet. Urna, turpis proin sapien netus et et
            placerat sit neque. Blandit felis, velit senectus sed aliquam nibh
            purus egestas pharetra. Bibendum leo vulputate velit vel in id.
            Egestas massa quis nisi, semper. Massa feugiat tincidunt nam metus,
            quam. Rhoncus et, hendrerit non, eget viverra dignissim sagittis
            porttitor eu. Nec, tellus integer condimentum tristique tristique
            morbi nibh dictumst. Quisque egestas purus donec lacus, neque nibh
            rhoncus neque purus. Quis sit non amet nisl, porta eu gravida. Lorem
            vulputate fermentum semper quis facilisi elit parturient eros, in.
            Dui euismod amet, potenti ac nibh in quis pretium tristique. Nunc id
            lectus amet dictumst sed. Eros etiam nulla orci amet magna
            vestibulum condimentum. Aenean pretium ac pharetra eu pharetra,
            egestas sed.
          </p>
        </div>
        <div class=" card-in">
          <p class="split-parag">
            Title <span>Date: dd/mm/yyyy</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit id nec
            cursus feugiat semper nisl. Nisl orci dis porttitor dui. Sed turpis
            mattis enim et egestas elit felis mattis. Pretium ultricies at
            eleifend accumsan consequat, risus nascetur nunc, interdum. Accumsan
            sit arcu, id cras id in amet. Urna, turpis proin sapien netus et et
            placerat sit neque. Blandit felis, velit senectus sed aliquam nibh
            purus egestas pharetra. Bibendum leo vulputate velit vel in id.
            Egestas massa quis nisi, semper. Massa feugiat tincidunt nam metus,
            quam. Rhoncus et, hendrerit non, eget viverra dignissim sagittis
            porttitor eu. Nec, tellus integer condimentum tristique tristique
            morbi nibh dictumst. Quisque egestas purus donec lacus, neque nibh
            rhoncus neque purus. Quis sit non amet nisl, porta eu gravida. Lorem
            vulputate fermentum semper quis facilisi elit parturient eros, in.
            Dui euismod amet, potenti ac nibh in quis pretium tristique. Nunc id
            lectus amet dictumst sed. Eros etiam nulla orci amet magna
            vestibulum condimentum. Aenean pretium ac pharetra eu pharetra,
            egestas sed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Academic;
