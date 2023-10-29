import  { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const  response = await axios.post("/register", {
        name,email,Password:pass
      });
      
      console.log(response.data);
      if (response.error) {
        toast.error(response.error);
      } else {
        setName("");
        setEmail("");
        setPass("");
        toast.success("register successful");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(( ) => {
    if (localStorage.getItem("user")){
      navigate('/')
    }
  }, [navigate]);
    

  const check = () => {
    if (email === "" || pass === "" || name === "") {
      alert("Enter all the details");
    }
  };
  

  return (
    <>
      <div className="body w-full h-screen items-center justify-center flex bg-emerald-50 bg-transparent">
        <div className="main text-center flex bg-black w-96 rounded-2xl h-4/5 text-white z-10">
          <form onSubmit={handleSubmit} className='text-center flex flex-col items-center mt-6'>
            <label className='w-80 font-bold mb-2' htmlFor='name'>Name</label>
            <input
              className='w-80 ml-7 rounded-2xl h-11 mb-3 text-black outline-none pl-2'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Full Name'
            />
            <label className='w-80 font-bold mb-2' htmlFor='email'>Email</label>
            <input
              className='w-80 ml-7 rounded-2xl h-11 mb-3 text-black outline-none pl-2'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
            />
            <label className='w-80 font-bold mb-2' htmlFor='password'>Password</label>
            <input
              className='w-80 ml-7 rounded-2xl h-11 mb-11 text-black outline-none pl-2'
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder='Enter your password'
            />
            <button onClick={check} className='w-80 ml-7  rounded-2xl bg-blue-600 h-11 text-center mb-8' type='submit'>Sign Up</button>
            
            
            <Link to="/login"><button className='ml-6 text-center text-xs hover:underline'>Have an account? Login here.</button></Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
