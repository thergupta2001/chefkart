import { Route, Routes } from "react-router-dom"
import Page from "./pages/Page"
import Details from "./pages/Details"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  )
}

export default App
