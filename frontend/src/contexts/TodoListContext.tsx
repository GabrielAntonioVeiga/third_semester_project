import React, { useState } from "react"

interface TTodoList {
  list: { id: number; task: string; checked: boolean }[]
  setList: React.Dispatch<
    React.SetStateAction<{ id: number; task: string; checked: boolean }[]>
  >
}

export const TodoListContext = React.createContext({} as TTodoList)

export const TodoListContextProvider = (props: React.PropsWithChildren) => {
  const [list, setList] = useState(() => {
    const dadosLocais = localStorage.getItem("localData")
    if (dadosLocais)
      return JSON.parse(dadosLocais) as {
        id: number
        task: string
        checked: boolean
      }[]
    return [{ id: 1, task: "fazer bolo", checked: false }]
  })

  return (
    <TodoListContext.Provider value={{ list, setList }}>
      {props.children}
    </TodoListContext.Provider>
  )
}
