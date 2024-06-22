import { NavLink as BaseNavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";

const Container = styled.div`
  max-width: 1240px;
  padding: 20px;
`;

const Header = styled.header`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid #fff;
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
`;

const NavLink = styled(BaseNavLink)`
  text-decoration: none;
  color: gainsboro;

  transition: color 2s linear;
  transition: text-decoration .2s linear;

  &.active {
    color: gray;
    text-decoration: underline;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const App = () => {
  return (
    <Container>
      <Header>
        <h3>Домашка к RND | useLayoutEffect, useRef, useId</h3>
        <Nav>
          <NavLink to='/task1'>Задание 1</NavLink>
          <NavLink to='/task2'>Задание 2</NavLink>
          <NavLink to='/task3'>Задание 3</NavLink>
        </Nav>
      </Header>
      <main>
        <Routes>
          <Route path="task1" element={<Task1 />} />
          <Route path="task2" element={<Task2 />} />
          <Route path="task3" element={<Task3 />} />
        </Routes>
      </main>
    </Container>
  );
};
