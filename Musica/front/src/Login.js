import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import img2 from "./Components/Images/google1.png";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  

  const google = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`
          }
          
        });
        if (response.data.error) {
          toast.error("unauthorized");
        } else {
          ;
          setEmail("");
          setPass("");
          toast.success("login successful")
          navigate("/");
        }
        console.log(response.data); 
      } catch (error) {
        console.error(error);
      }
    },
  });
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("/login", { email, pass });
      console.log(response.data);
      if (response.data.error) {
        toast.error("unauthorized");
      } else {
        setEmail("");
        setPass("");
        toast.success("login successful")
        localStorage.setItem(
          "user",
          JSON.stringify({ ...response.user, Password: "" })
        );
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const check = () => {
    if (email === "" || pass === "") {
      alert("Enter all the details");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <div className="body w-full h-screen items-center justify-center flex bg-emerald-50 bg-transparent">
        <div className="main text-center flex bg-black w-96 rounded-2xl h-4/5 text-white z-10">
          <form onSubmit={handleSubmit} className='text-center flex flex-col items-center mt-6'>
            <label className='w-80 font-bold mb-2' htmlFor='email'>Email</label>
            <input
              className='w-80 ml-7 rounded-2xl h-12 mb-3 text-black outline-none pl-2'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
            />
            <label className='w-80 font-bold mb-2' htmlFor='password'>Password</label>
            <input
              className='w-80 ml-7 text-black rounded-2xl h-10 mb-10 outline-none pl-2'
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder='Enter your password'
            />
            
            <button onClick={check} className='w-80 ml-7 rounded-2xl bg-blue-600 h-11 text-center mb-8' type='submit'>Log In</button>
            <p className='text-xs mb-6 ml-3'>Or continue with-</p>
            <div className="google relative">
            <img className='w-7 absolute left-14 top-2' src={img2} alt="" />
             <button onClick={google} className='text-center w-80 ml-7 rounded-2xl bg-blue-600 h-11 mb-8'>Continue with Google</button>
             </div>
            <Link to="/Register"><button className='ml-5 text-center text-xs hover:underline'>Don't have an account? Register here.</button></Link>
          </form>
          <ToastContainer/>
        </div>
      </div>
    </>
  );
};

export default Login;
