/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image

 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Welcome to my portfolio! I am Yatharth Khanna a driven individual passionate about leveraging technology, particularly in AI/ML and Cybersecurity. With a strong foundation in Computer Science and a relentless pursuit of excellence, I've garnered numerous accolades and milestones in my academic and professional journey.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "5x Limca Book of World Record Holder   ",
  
  "9x Limca Book of National Record Holder",
  "Dean's Excellence Awardee",
  "Student Excellence Awardee",
  "TryHackMe: Top 5%",
  "Chess FIDE Rating: 1464"
  
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "In addition to my accomplishments in the tech domain, I've achieved a commendable FIDE rating of 1464 through my leadership as the captain of MUJ's chess team. Furthermore, I've consistently ranked in the top 5% on TryHackMe, showcasing my proficiency and dedication in cybersecurity challenges.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
