import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import {Carousel, Item} from 'react-elastic-carousel'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaEnvira } from "react-icons/fa";


import "./ComponentStyle.css"
import CoursesData from "../Data/CoursesData"


const settings = {
  // dots: true,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
};
function CoursesList() {
  return (
    
    <div className='courses-list'>
      <div className="tag">
          <h1>Courses</h1>
    </div>
      <div className="imgslider">
        <Slider {...settings}>
          {CoursesData.map((item) => (
            <div key={item.id} className = "courses-item">
              <img src={item.image}  alt={item.alt} />
              <h3>{item.name}</h3>
              <FaEnvira style={{fontSize:"20px",marginLeft:"10px"}}/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
          
  )
}

export default CoursesList


/* 

  {CoursesData.map(course =>{
        <Carousel variant="dark">
      <Carousel.Item key={course.id}>
        <img
          className="d-block w-100"
          src = {course.image}
          alt="First slide"
        /> }
        <Carousel.Caption>
          <h5>Hello</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      })}
*/