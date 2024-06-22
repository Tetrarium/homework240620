import { useId } from "react";
import styled from "styled-components";

import Task from "./Task";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;
const Label = styled.label``;
const Input = styled.input``;

export default function Task2() {
  const nameId = useId();
  const mailId = useId();
  const phoneId = useId();

  return (
    <Task
      title="Задание 2"
      subtitle={<>Создание формы с использованием <code>useId</code></>}
      description={<>
        Создайте компонент формы, который включает несколько полей ввода (например, имя, электронная почта, телефон). Используйте useId для генерации уникальных идентификаторов для каждого поля ввода и соответствующего элемента <code>label</code>.
      </>}
    >
      <Form>
        <Row>
          <Label htmlFor={nameId} >Имя: </Label>
          <Input id={nameId} type="text" />
        </Row>
        <Row>
          <Label htmlFor={mailId} >Email: </Label>
          <Input id={mailId} type="mail" />
        </Row>
        <Row>
          <Label htmlFor={phoneId} >Телефон</Label>
          <Input id={phoneId} type="phone" />
        </Row>
      </Form>
    </Task>
  );
}