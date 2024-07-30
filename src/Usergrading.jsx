import React from 'react'
import propTypes from 'prop-types'

const Usergrading = (props) => {
    const welcomeMessage =<h2 className='welcome-message'>welcome {props.userName}</h2> 
    const LoginPrompt = <h2 className='login-prompt'>please log in to continue</h2>
    return (props.isLoggedIn ? welcomeMessage : LoginPrompt
    );

} 
Usergrading.propTypes={
  isLoggedIn:propTypes.bool,
  UserName: propTypes.string,
 }
 Usergrading.defaultprops={
  isLoggedIn: false,
  userName:"Guest",
 }

export default Usergrading