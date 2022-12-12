import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"

export default function () {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/register" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}
