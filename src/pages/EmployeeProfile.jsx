import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";

function EmployeeProfile() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getById?id=${id}`)
      .then((response) => setEmployee(response.data))
      .catch(() => alert("something went wrong during fetch profile"));
  }, []);

  const updateEmployee = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:8080/update", {
        id: employee.id,
        name: employee.name,
        email: employee.email,
        password: employee.password,
      })
      .then((response) => {
        if (response.data) {
          alert("Updated!");
          navigate('/dashboard')
        }
      })
      .catch(() => alert("Something went wrong"));
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setEmployee((old) => ({ ...old, [name]: value }));
  };

  return (
    <div>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <nav className="bg-gray-900 text-white px-6 py-3 shadow-md flex justify-between items-center">
          {/* Left side - Brand */}
          <div className="text-2xl font-semibold tracking-wide">Employee</div>

          {/* Right side - Links */}
          <div className="space-x-4">
            <Link
              to={"/login"}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200"
            >
              Logout
            </Link>
          </div>
        </nav>

        {/* Updtae Form Section */}
        <div className="flex-grow flex items-center justify-center">
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
              Update Profile
            </h2>

            <form className="space-y-5" onSubmit={updateEmployee}>
              {/* ID */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Id
                </label>
                <input
                  type="number"
                  name="id"
                  value={employee.id}
                  onChange={inputHandler}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your ID"
                  required
                  readOnly
                />
              </div>

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
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default EmployeeProfile;
