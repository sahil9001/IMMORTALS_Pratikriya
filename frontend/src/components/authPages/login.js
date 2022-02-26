
import profile from "../../assets/images/logos/logo-themed.jpeg";
import email from "../../assets/images/icons/email.jpg";
import pass from "../../assets/images/icons/pass.png";
function Login() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input className='input' type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
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