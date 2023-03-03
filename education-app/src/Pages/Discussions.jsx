import React from 'react'
import DiscussionElement from '../Components/HomeComponents/DiscussionComponent/DiscussionElement'

import "./pages.css"
function Discussions() {
  return (
    <div className='discussion'>
      <h2>Discussion</h2>
      <div className='discussion-item'>
        <DiscussionElement/>
      </div>
    </div>
  )
}

export default Discussions
