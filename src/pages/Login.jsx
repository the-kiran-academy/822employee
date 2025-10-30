import axios from "axios";
import { useState } from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setCredentials((old) => ({ ...old, [name]: value }));
  };

  const login = (e) => {
    e.preventDefault(); // prevent form reload

    axios
      .post("http://localhost:8080/login", {
        email: credentials.email,
        password: credentials.password,
      })
      .then((response) => {
        if (response.data) {
          // nevigate to the dashboard
          navigate("/dashboard");
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch(() => alert("Something went wrong"));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Menu />

      {/* Login Form Section */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Login to Your Account
          </h2>

          <form className="space-y-5" onSubmit={login}>
            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={inputHandler}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={inputHandler}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Login;
