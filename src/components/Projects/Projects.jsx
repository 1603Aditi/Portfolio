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
    desc: "Travelverse is a travel planning and booking web application designed to help users explore destinations, view travel packages, and manage bookings seamlessly.",
    link:"https://my-travelverse.onrender.com/"
  },
  {
    img: p2,
    title: "UPI Slice",
    desc: "UPI Slice is a smart bill-splitting app that helps users manage group expenses effortlessly. Users can split bills, track payments, and send or receive UPI payments instantly, making shared transactions simple and hassle-free.",
    link:"https://my-upislice-2.onrender.com"
  },
  {
    img: p3,
    title: "Internshala Automation",
    desc: "This project automates the process of searching and applying for internships on Internshala. It allows users to filter internships based on their preferences, automatically applies to multiple listings, and can even send confirmation notifications, saving time and effort for students.",
    link:"https://github.com/1603Aditi/Internnshala_automation"
  },
  {
  img: p4, 
  title: "Style Match",
  desc: "Style Match is a web application that helps users discover trending fashion products and styles. Users can browse, filter, and explore clothing and accessories from multiple brands, and get personalized recommendations for a seamless shopping experience.",
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
