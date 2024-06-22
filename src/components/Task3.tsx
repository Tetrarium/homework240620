import Task from "./Task";

export default function Task3() {
  return (
    <Task
      title="Задание 3"
      subtitle={<>Управление фокусом с использованием <code>useRef</code></>}
      description={<>
        Создайте компонент, который включает в себя несколько кнопок и одно текстовое поле. По нажатию на любую из кнопок фокус должен переходить к текстовому полю. Используйте <code>useRef</code> для управления фокусом.
      </>}
    >
      Тело таски
    </Task>
  );
}