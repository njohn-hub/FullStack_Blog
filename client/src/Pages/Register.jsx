import React from 'react'

const Register = () => {
  return (
    <form className='register'>
        <h1>Register</h1>
    <input type="text" placeholder='username' />
    <input type="email" placeholder='email' />
    <input type="password" placeholder='password' />
    <button>Register</button>
</form>
  )
}

export default Register