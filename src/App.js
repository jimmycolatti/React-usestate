import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Movies from "./pages/Movies"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
