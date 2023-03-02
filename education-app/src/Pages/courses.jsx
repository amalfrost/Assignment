import React from 'react'
import Achievements from '../Components/AchivementComponent/Achievements'
// import ImgOverlayExample from '../Components/CoursesHeader'
import CoursesHeader from '../Components/CoursesHeader'
import CoursesList from '../Components/CoursesList'
import LearningPath from '../Components/LearningPath'

import "./pages.css"

function Courses() {
  return (
    <div className='Courses'>
      <CoursesHeader/>
      <LearningPath/>
      <CoursesList />
      <Achievements/>
    </div>
  )
}

export default Courses


/* <ImgOverlayExample/> */
/* <CoursesHeader/> */
