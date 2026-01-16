import { Home } from "lucide-react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
