import React from 'react'
import "./error.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

export default function Error() {
  return (
    <div className='error'>
      <FontAwesomeIcon icon={faSkullCrossbones} className='error-icn'/>
      <h1>OOPS!</h1>
      <h3>404 Error!!! Page not found...</h3>
      <h3>BETTER LUCK NEXT TIME</h3>
    </div>
  )
}
