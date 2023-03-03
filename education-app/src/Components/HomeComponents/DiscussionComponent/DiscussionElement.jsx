import React from 'react'
import "./DiscussionStyle.css"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import UserList from './UserList';


function DiscussionElement() {
  return (
    <div className='discussion'>
      <div className='discussion-head'>
        <input placeholder='Search Discussions' />
        <Dropdown as={ButtonGroup}>
      <Button >All  Topics</Button>

      <Dropdown.Toggle  id="dropdown-split-basic" />

      {/* <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        
      </Dropdown.Menu> */}
    </Dropdown>
        <Button variant="danger">Ask a question</Button>
      </div>

      <div className='discussion-body'>
        <UserList/>
      </div>
    </div>
  )
}

export default DiscussionElement
