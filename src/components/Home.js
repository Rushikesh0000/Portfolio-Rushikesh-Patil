import React, { useEffect, useRef } from 'react'
import pdf from "../pdf/resume.pdf";
import Typed from "typed.js";
import 'bootstrap/dist/css/bootstrap.css';
import profile_pic from "../img/profile_img.JPG";

const Home = () => {
  const typedRef= useRef(null)
  useEffect(() => {
   
    const options=
    {
      strings:["Welcome to my profile","My Name is Rushikesh Patil","I'm Full Stack Developer"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }

    const typed= new Typed(typedRef.current,options)
    return () => {
      typed.destroy()
    }
  }, [])
  
  return (
    <>
      <div className="container home" id="home">
         
         <div className="left" 
         data-aos="fade-up-right" data-aos-duration="1000" 
         >
            <h1 ref={typedRef}> </h1>
            <a href={pdf} download="Rushikesh_patil.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
         </div>
         <div className="right">
         
         <div className="img">
         {/* <img src={`/assets/${hero.imgSrc}`} alt="Hero Image" /> */}
         <img src={profile_pic} alt="Hero Image" />

         </div>
   
         </div>
   
         </div>
    </>
  )
}

export default Home