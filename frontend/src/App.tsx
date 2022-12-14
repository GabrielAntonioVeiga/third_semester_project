import { TodoListContextProvider } from "./contexts/TodoListContext"
import { UserContextProvider } from "./contexts/UserContext"
import RoutesApp from "./routes/RoutesApp"
import GlobalStyles from "./styles/GlobalStyles"

function App() {
  return (
    <>
      <UserContextProvider>
        <TodoListContextProvider>
          <GlobalStyles />
          <RoutesApp />
        </TodoListContextProvider>
      </UserContextProvider>
    </>
  )
}

export default App
