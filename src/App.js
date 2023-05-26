import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home"
import Studio from "./pages/studio/Studio"
import LIst from "./pages/list/LIst";
import SpaceDtl from "./pages/space/spaceDtl";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/spaces" element={<LIst/>}/>
        <Route path="/spaces/:id" element={<SpaceDtl/>}/>
        <Route path="/studios/:id" element={<Studio/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
