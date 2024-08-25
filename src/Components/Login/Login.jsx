import React from 'react'
import "./login.css";

export const Login = () => {
  return (
    <>
    <div className='body'>
      <div className='container'>
        <div className='heading'>
              FURNITURE SHOOPING
        </div>

        <div className='box'>
          <h2 className='log'>Log In With</h2>
          <div className='img-container'>
            <div>
              <button className='box1'><i className='icon' class="fa-brands fa-google"></i>Google</button>
            </div>
            <div>
              <button className='box1'><i class="fa-brands fa-apple"></i>Apple</button>
            </div>       
          </div>
          
          <div className='user'>
            <div className='name'>User Name</div>
            <div><input className='enter' type='text' placeholder='Enter User Name'></input></div>
          </div>

          <div className='user'>
            <div className='name'>Password</div>           
            <div><input className='enter' type='password' placeholder='Enter Password'></input></div>
            <a className='forgot' href=''>Forgot Password</a>
          </div>

          <div>
            <button className='login'>Log In</button>
          </div>

          <div className='account'>
            <p>Don't have an account <a className='signup' href=''>Signup</a></p>
            
          </div>

          
        </div>

      </div>
    </div>

    </>
  )
}
