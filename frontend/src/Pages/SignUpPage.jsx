import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authUser";


const SignUpPage = () => {

  const {searchParams} =new URL(document.location)
  const emailValue = searchParams.get('email')
  const [email, setEmail] = React.useState(emailValue || "");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");

  const {signup} = useAuthStore()


  const handleSingUp = async (e) => {
    e.preventDefault();
    signup({email, password, username});
    };
    
  return (
    <div className="h-screen w-full hero-bg">
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to={"/"}>
          <img
            src="/netflix-logo.png"
            alt="netflix logo"
            className="w-52"
          ></img>
        </Link>
      </header>
      <div className="flex justify-center items-center mt-20 mx-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md" >
          <h1 className="text-center text-white text-2xl font-bold mb-4">SignUp</h1>
          <form className="space-y-4" onSubmit={handleSingUp}>
            <div>
              <label htmlFor="email" className="text-sm font-md text-gray-300 block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <label htmlFor="username" className="text-sm font-md text-gray-300 block">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Steve Jobs"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                onChange={(e) => setUsername(e.target.value)}
                value={username}

              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-md text-gray-300 block">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                onChange={(e) => setPassword(e.target.value)}
                value={password}

              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring"
              
            >
              Sign Up
            </button>
          </form>
          <div className="text-center text-gray-400 ">
            Already have an account? <Link to={"/login"} className="text-red-600 hover:underline">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
