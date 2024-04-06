import React from 'react'
import './morning.css'

export const Morning = () => {
  return (
    <div className='morning'>
        <h3>Morning Routine</h3>
            <div className='morning1'>
              <ul className='horizontal-list'>
                <li className='requirements'>1L Water</li>
                <li className='requirements'>Write / Revise ToDo List</li>
                <li className='requirements'>Expose yourself to light 5- 10 mins</li>
                <li className='requirements'>Blog Reviews</li>
              </ul>  
            </div>
        <hr className='headerhr' />
    </div>
  )
}
