import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/getAll")
      .then((response) => setEmployees(response.data))
      .catch(() => alert("Somethig went wrong during fetch all employees"));
  }, []);

  return (
    <div>
      <table className="border-2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp, index) => (
            <tr className="border-2" key={index}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
