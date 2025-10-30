import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>

        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </>
  );
}

export default App;
