import {
  TodoListContext,
  TodoListContextProvider
} from "./contexts/TodoListContext"
import RoutesApp from "./routes/RoutesApp"
import GlobalStyles from "./styles/GlobalStyles"

function App() {
  return (
    <>
      <TodoListContextProvider>
        <GlobalStyles />
        <RoutesApp />
      </TodoListContextProvider>
    </>
  )
}

export default App
