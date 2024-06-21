import { NavLink, Route, Routes } from "react-router-dom";

import Task1 from "./components/Task1";

export const App = () => {
  return (
    <div>
      <header>
        <h3>Домашка к RND | useLayoutEffect, useRef, useId</h3>
        <nav>
          <NavLink to='/task1'>Задание 1</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="task1" element={<Task1 />} />
        </Routes>
      </main>
    </div>
  );
};
