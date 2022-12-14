import React, { createContext, PropsWithChildren, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { UserFormData } from "../types/user"

type UserContextType = {
  createUser: (data: UserFormData) => void
  loginUser: (data: UserFormData) => void
}

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = (props: PropsWithChildren) => {
  const navigate = useNavigate()
  const [token, setToken] = useState("")

  //create
  const createUser = async (data: UserFormData) => {
    const request = await fetch(`http://localhost:8080/user/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        name: data.name,
        password: data.password
      })
    })

    if (request.status >= 200 && request.status <= 299) {
      alert("usuário criado com sucesso")
      navigate("/login")
      return
    }
  }

  //loginUser
  const loginUser = async (data: UserFormData) => {
    const request = await fetch(`http://localhost:8080/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    })

    const responseData = await request.json()

    setToken(responseData.sesid)

    if (request.status >= 200 && request.status <= 299) {
      localStorage.setItem("token", responseData.sesid)
      navigate("/home")
      return
    }
  }

  return (
    <UserContext.Provider value={{ createUser, loginUser }}>
      {props.children}
    </UserContext.Provider>
  )
}
