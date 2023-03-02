import React, { useState } from 'react'
import { FaAngular } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
function CourseHeaderItem({courseName, course}) {
    // const [courses, setCourses] = useState("")
  return (
    <div className="courses-headeritem">
    <div className="courses-headeritemlist">
      <FaAngular  className="courses-icon"/>
      <h4>{courseName}</h4>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
    </div>
    <p>{course}</p>
  </div>
  )
}

export default CourseHeaderItem
