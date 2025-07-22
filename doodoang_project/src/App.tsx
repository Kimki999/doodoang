import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import GetCard from "./pages/getcard";
import About from "./pages/about"
import Flipcard from "./pages/flipcard";

export default function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/FlipCard" element={<Flipcard />} />
            <Route path="/GetCard" element={<GetCard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
  )
}

