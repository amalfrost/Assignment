import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ComponentStyle.css";
import { FaAngular } from "react-icons/fa";
import CourseHeaderItem from './CourseHeaderItem';



function LearningPath() {
  return (
    <div className='learning'>
       <Container>
      <Row className='learning-list'>
        <Col><h3>Learning Path</h3></Col>
        <Col><p style={{marginLeft:"70%"}}>All my learning</p></Col>
      </Row>
      <Row className='learning-listItems'>
        <Col><CourseHeaderItem courseName = {"Angular Fundamentals"} course={"Resume"}/></Col>
        <Col><CourseHeaderItem courseName = {"React Fundamentals"} course={"Resume"}/></Col>
        <Col><CourseHeaderItem courseName = {"Java Fundamentals"} course={"Resume"}/></Col>
      </Row>
      <Row className='learning-listItems'>
        <Col><CourseHeaderItem courseName = {"Angular Fundamentals"} course={"Resume"}/></Col>
        <Col><CourseHeaderItem courseName = {"Angular Fundamentals"} course={"Resume"}/></Col>
        <Col><CourseHeaderItem courseName = {"Angular Fundamentals"} course={"Resume"}/></Col>
      </Row>
      
    </Container>
    </div>
  )
}

export default LearningPath
