import React from "react";
import Carouselhome from "../components/Carousel";
import "./home.css"
// import devops_img from "../images/grey-plexus-networking-2_gs4bVa0k.mp4"
// import devops_img from "../images/grey-plexus-networking-2_gs4bVa0k.mp4"
const Home = () => {

  return (
    <>
    
      <Carouselhome/><br/>
      <div className="desc">
        <h2><b>IEEE SB VIT Pune</b> </h2>
        <p>IEEE VIT PUNE has a goal to share our passion for technology by educating students about
          current developments in the field of engineering by enhancing their knowledge in the latest 
          technologies via organizing technical workshops and webinars. We promote our student community 
          with their ability for invention, resourcefulness and ultimately innovation.<br/>
          We proudly present a workshop on one of the most interesting and useful topics - DevOps. </p>

        <br/>

        <h2><b>What is DevOps?</b></h2>
        <p>DevOps is an approach or practice that combines the development team and the IT team to collaborate 
          throughout the entire software development cycle so that all the team will be on the same page.
          The DevOps Workshop will help you to learn and master various aspects of software development, operations 
          and continuous integration.
      </p>
      </div>
      {/* <img src={devops_img} alt=""/> */}

    </>
  );
};

export default Home;