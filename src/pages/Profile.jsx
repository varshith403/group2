import { Link } from 'react-router-dom'
import React from 'react'

const Profile = () => {
  return (
    <div>Profile
        <hr />
        <br />
        <Link to='./Profile/MyAccount'>My Account</Link><br/><br/>
        <Link to='./Profile/MySettings'>MY Settings</Link>
        
    </div>
  )
}

export default Profile