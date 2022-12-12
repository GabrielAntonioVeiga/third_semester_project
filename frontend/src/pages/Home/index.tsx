import { useState, useContext, useEffect, KeyboardEvent } from "react"
import { MdList, MdUpdate } from "react-icons/md"
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
    setList([...list, ev.currentTarget.value])
    ev.currentTarget.value = ""
  }

  const remover = (removeidx: number) => {
    setList(list.filter((_, idx) => idx != removeidx))
  }

  // const update = (numero: number, checked: boolean) => {
  //   const index = list.findIndex((el, idx) => idx === numero)
  //   console.log(index)
  // }

  return (
    <>
      <StyledInput type="text" onKeyUp={addTodo} />
      <Container>
        {list.map((el, idx) => (
          <div
            className={
              // checked ? "card complete" :
              "card"
            }
            key={idx}
          >
            {el}{" "}
            <button className="close-button" onClick={() => remover(idx)}>
              <RiCloseCircleLine size="2em" color="var(--russian-violet)" />
            </button>
            <button
              className="confirm-button"
              // onClick={() => update(idx)}
            >
              <RiCheckFill size="2em" color="var(--russian-violet)" />
            </button>
          </div>
        ))}
      </Container>
    </>
  )
}
