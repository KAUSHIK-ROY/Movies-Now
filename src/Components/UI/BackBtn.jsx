import React from 'react'
import './backBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

function BackBtn() {
    const navigate = useNavigate()
    const backPage = ()=>{
        navigate(-1)
    }
  return (
    <div className='back-btn' onClick={backPage}>
        <FontAwesomeIcon icon={faChevronLeft} />
        Back
    </div>
  )
}

export default BackBtn