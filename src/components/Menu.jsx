import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 shadow-md flex justify-between items-center">
      {/* Left side - Brand */}
      <div className="text-2xl font-semibold tracking-wide">
        Employee
      </div>

      {/* Right side - Links */}
      <div className="space-x-4">
        <Link to={'/login'}  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200">
          Login
        </Link>
        <Link to={'/register'} className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-200">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
