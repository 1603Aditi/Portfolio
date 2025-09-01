// Projects.jsx
import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import p1 from "../../assets/travelverse.png";
import open from "../../assets/more.png";
import p2 from "../../assets/upiSlice.png";
import p3 from "../../assets/internshala.png";
import p4 from "../../assets/style.png";
const projectData = [
  {
    img: p1,
    title: "Travelverse",
    desc: "A travel planning and booking app that helps users explore destinations, view packages, create listings,and manage bookings seamlessly.",
    link:"https://my-travelverse.onrender.com/"
  },
  {
    img: p2,
    title: "UPI Slice",
    desc: "A smart bill-splitting app that simplifies group expenses. It allows users to track payments and split bills instantly using UPI, making shared transactions effortless.",
    link:"https://my-upislice-2.onrender.com"
  },
  {
    img: p3,
    title: "Internshala Automation",
    desc: "A project that automates the process of searching and applying for internships on Internshala. It saves time for students by automatically filtering and applying to multiple listings based on preferences.",
    link:"https://github.com/1603Aditi/Internnshala_automation"
  },
  {
  img: p4, 
  title: "Style Match",
  desc: "A web app that helps users discover and explore trending fashion products. Users can browse and filter clothing from multiple brands to find personalized style recommendations",
  link:"https://github.com/1603Aditi/Style_Match"
}
  
];

const Projects = () => {
  return (
    <div className='projects'>
      {projectData.map((proj, index) => (
        <ProjectCard
          key={index}
          img={proj.img}
          title={proj.title}
          desc={proj.desc}
          captionIcon={open}
          link={proj.link}
        />
      ))}
    </div>
  );
};

export default Projects;
