import React,{useState,useEffect} from 'react'
import SignInbutton from './SignInbutton'
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { HashLink, Link } from "react-router-hash-link";

const Home = () => {

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const [username,setUserName]=useState('')
  const [password,setPassword]=useState('')
  const onLoginSuccess = (res) => {
    console.log('Login Success:', res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
};

const onLoginFailure = (res) => {
    console.log('Login Failed:', res);
};
    const name = 'FcGoogle';
    const data2="Apple"

  return (
    <div>
    <div className='sidebar'>
        <div className='board'>
          <p>  Board</p>
        </div>
    </div>
    <div className='right'>
        <div>
         <h2 className='signin'>Sign In</h2>
       <h4 className='signpara'>Sign in to your account
</h4>
<div>
        <button  className='buttongoogle'><FcGoogle clientId={"8857816399073-epiedj02dv9i7k7jcasntpe0p06r3ran.apps.googleusercontent.com"} 
         buttonText="Sign in with Google"
         onSuccess={onLoginSuccess}
         onFailure={onLoginFailure}
         cookiePolicy={'single_host_origin'}
         isSignedIn={true}/> Sign in with Google</button> <br/>  
             <button  className='buttongoogle1'><BsApple/> Sign in with Apple</button>

    </div>

</div>
<div className='card'>
    <div>
    <h6 className='emailads'>Email address</h6>
    <input type="text" id="fname" name="fname" value={username} placeholder='Username' onChange={(e)=> setUserName(e.target.value)}/><br/>
    </div>
    <div>

    <h6 className='password'>Password</h6><br/>
    <input className='password1' type="password" id="password" name="password" value={password} placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/><br/>
</div>
<h6 className='forget'>Forgot password?
</h6><br/>
<span style={{letterSpacing:'0.5em'}}>&emsp;</span> 
<HashLink
            smooth
             to={"/mhp"}
          ><button>Sign In
          </button></HashLink>
</div>
<div className='register'>
<h6><span style={{color:'#858585'
}}>Don’t have an account?</span> <span style={{color:'#346BD4'
}}>Register here</span>
</h6>
</div>
    </div>
    </div>
  )
}

export default Home