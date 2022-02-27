import profile from "../assets/images/logos/logo-themed.jpeg";
import email from "../assets/images/icons/email.jpg";
import pass from "../assets/images/icons/pass.png";
import {useRouter} from "next/router";
import Link from "next/link";

function Login() {
  const router = useRouter();
  return (
    
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email" style={{marginTop:'-11px', marginLeft:'-5px'}}/>
              <input type="text" placeholder="user name" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" style={{marginTop:'-11px', marginLeft:'-5px'}} />
              <input type="password" placeholder="password" className="name" />
            </div>
            <div className="login-button">
              <Link href="/dashboard">
              <button >Login</button>
              </Link>
            </div>

            <p className="link">
              <a href="#">Forgot password ?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
