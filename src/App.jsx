import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./css/app.css";
import Menu from "./components/Menu";
import About from "./pages/About";
import Add from "./pages/Add";
import List from "./pages/List";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 0, title: "Example", content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
    perferendis pariatur, possimus eveniet consequatur temporibus sapiente
    dolor excepturi eos tenetur ducimus numquam ad non sint porro?
    Eligendi illum minima earum.`, like: 0 },
  ]);

  return (
    <>
      <Menu />
      <header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add"
            element={<Add tasks={tasks} setTasks={setTasks} />}
          />
          <Route path="/list" element={<List tasks={tasks} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </header>
    </>
  );
}

export default App;