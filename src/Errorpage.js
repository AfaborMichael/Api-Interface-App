import React from 'react'
import {Link} from 'react-router-dom'
function Errorpage() {

  return(
    <div className='Error'>
      <h2>Webpage not Found</h2>
      <Link to='/'>Back to the Home Page...</Link>
    </div>
  )
}

export default Errorpage