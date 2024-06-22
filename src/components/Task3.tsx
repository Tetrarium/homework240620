import { useRef } from "react";
import styled from "styled-components";

import Task from "./Task";

const Container = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Input = styled.input`
  padding: 0 10px;
  font-size: .8em;
`;

const Button = styled.button`
  padding: 2px 10px;
  font-size: .8em;
  cursor: pointer;
`;

export default function Task3() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Task
      title="Задание 3"
      subtitle={<>Управление фокусом с использованием <code>useRef</code></>}
      description={<>
        Создайте компонент, который включает в себя несколько кнопок и одно текстовое поле. По нажатию на любую из кнопок фокус должен переходить к текстовому полю. Используйте <code>useRef</code> для управления фокусом.
      </>}
    >
      <Container>
        <Input type="text" ref={inputRef} />
        <Button type="button" onClick={() => inputRef.current?.focus()}>Кнопка 1</Button>
        <Button type="button" onClick={() => inputRef.current?.focus()}>Кнопка 2</Button>
        <Button type="button" onClick={() => inputRef.current?.focus()}>Кнопка 3</Button>
      </Container>
    </Task>
  );
}