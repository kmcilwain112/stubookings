import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home"
import List from "./pages/list/LIst"
import Studio from "./pages/studio/Studio"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/studios" element={<List/>}/>
        <Route path="/studios/:id" element={<Studio/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
