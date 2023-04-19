import { Outlet } from "react-router-dom"
import { GlobalStyle } from "./style/GlobalStyle"

function App() {

  return (
    <>
      <Outlet/>
      <GlobalStyle/>
    </>
  )
}

export default App
