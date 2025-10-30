import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

function Register() {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setEmployee((old) => ({ ...old, [name]: value }));
  };

  const registerEmployee = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/register", {
        name: employee.name,
        email: employee.email,
        password: employee.password,
      })
      .then((response) => {
        if (response.data) {
          alert("Registration Successfully Completed!");
          navigate("/login");
        }
      })
      .catch(() => alert("User Already Exists"));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Menu />

      {/* Register Form Section */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Create Your Account
          </h2>

          <form className="space-y-5" onSubmit={registerEmployee}>
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={employee.name}
                onChange={inputHandler}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={employee.email}
                onChange={inputHandler}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={employee.password}
                onChange={inputHandler}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create a strong password"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition-all duration-200"
              >
                Register
              </button>
            </div>
          </form>

          {/* Redirect to Login */}
          <p className="text-sm text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Register;
