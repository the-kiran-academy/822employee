import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate=useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/getAll")
      .then((response) => {
        setEmployees(response.data);
        setLoading(false);
      })
      .catch(() => {
        alert("Something went wrong while fetching employees!");
        setLoading(false);
      });
  }, []);

  const deleteEmployee = (id) => {
    // http://localhost:8080/delete?id=1

    axios
      .delete(`http://localhost:8080/delete?id=${id}`)
      .then((response) => {
        if (response.data === true) {
          alert("Employee Deleted");

          const newData = employees.filter((emp) => emp.id != id);
          setEmployees(newData);
        }
      })
      .catch(() => alert("Something went wrong"));
  };


  const showEmployee =(id)=>{

    // nevigate to EmployeeProfile
    navigate(`/employee-profile/${id}`)

  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
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

      <div className="max-w-8xl mx-auto bg-white shadow-2xl rounded-2xl p-6 transition-all duration-500">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Employee Dashboard
        </h1>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
          </div>
        ) : employees.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No employees found.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 rounded-lg shadow-md">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">ID</th>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Password</th>
                  <th className="py-3 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-blue-200 transition duration-300`}
                  >
                    <td className="py-3 px-4 border border-gray-300">
                      {emp.id}
                    </td>
                    <td className="py-3 px-4 border border-gray-300">
                      {emp.name}
                    </td>
                    <td className="py-3 px-4 border border-gray-300">
                      {emp.email}
                    </td>
                    <td className="py-3 px-4 border border-gray-300 text-gray-500 italic">
                      {emp.password}
                    </td>
                    <td className="py-3 px-4 border border-gray-300">
                      <button
                        onClick={() => deleteEmployee(emp.id)}
                        className="border-2 bg-red-400 p-2 rounded-lg "
                      >
                        Delete
                      </button>

                      <button
                        onClick={() => showEmployee(emp.id)}
                        className="ml-3 border-2 bg-blue-300 p-2 rounded-lg "
                      >
                        Show
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
