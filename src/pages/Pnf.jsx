import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <h1 style={{fontSize:'80px'}}>404</h1>
      <img className='img-fluid' src="https://i.pinimg.com/originals/6d/a8/78/6da878cf7299317b2bd88c7471111626.gif" alt="" />
      <h1>Looks Like You're Lost</h1>
      <p>The page you're looking for is not available</p>
      <Link to={'/'} className='btn btn-warning'>Go To Home</Link>
    </div>
  )
}

export default Pnf