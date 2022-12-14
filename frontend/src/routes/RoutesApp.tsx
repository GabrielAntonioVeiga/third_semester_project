import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import PrivateHomeRoute from "./PrivateHomeRoute"

export default function () {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/register" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateHomeRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}
