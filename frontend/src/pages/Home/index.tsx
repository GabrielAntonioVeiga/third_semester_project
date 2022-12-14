import { useState, useContext, useEffect, KeyboardEvent } from "react"
import { RiCheckFill, RiCloseCircleLine } from "react-icons/ri"
import { TodoListContext } from "../../contexts/TodoListContext"
import { Container, StyledInput } from "./style"

export default function () {
  const { list, setList } = useContext(TodoListContext)

  const store = () => {
    localStorage.setItem("localData", JSON.stringify(list))
  }

  useEffect(store, [list])

  const addTodo = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.code != "Enter") return
    ev.preventDefault()
    const newTask = {
      id: Math.random(),
      task: ev.currentTarget.value,
      checked: false
    }
    setList([...list, newTask])
    ev.currentTarget.value = ""
  }

  const remover = (removeidx: number) => {
    setList(
      list.filter(
        (todo: { id: number; task: string; checked: boolean }) =>
          todo.id != removeidx
      )
    )
  }

  const update = (numero: number, checked: boolean) => {
    const index = list.findIndex(
      (todo: { id: number; task: string; checked: boolean }) =>
        todo.id === numero
    )
    const newList = list
    newList[index].checked = !checked
    setList([...newList])
  }

  return (
    <>
      <StyledInput type="text" onKeyUp={addTodo} />
      <Container>
        {list.map((todo: { id: number; task: string; checked: boolean }) => (
          <div
            className={todo.checked ? "card complete" : "card"}
            key={todo.id}
          >
            {todo.task}{" "}
            <span>
              <button
                className="confirm-button"
                onClick={() => update(todo.id, todo.checked)}
              >
                <RiCheckFill size="2em" color="var(--russian-violet)" />
              </button>
              <button className="close-button" onClick={() => remover(todo.id)}>
                <RiCloseCircleLine size="2em" color="var(--russian-violet)" />
              </button>
            </span>
          </div>
        ))}
      </Container>
    </>
  )
}
