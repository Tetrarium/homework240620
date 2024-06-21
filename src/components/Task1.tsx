import styled from "styled-components";

const Title = styled.h2`
  font-size: 1.1em;
`;

const Subtitle = styled.h3`
  font-size: 1em;
`;

const Description = styled.p`
  font-size: 0.8em;
`;

export default function Task1() {
  return (
    <article>
      <header>
        <Title>Задача 1</Title>
        <Subtitle>Создание компонента с использованием <code>useLayoutEffect</code></Subtitle>
        <Description>Создайте компонент, который меняет размер и позицию блока в зависимости от размеров окна браузера ( например так чтобы имел половину ширины экрана  и высоты) . Используйте <code>useLayoutEffect</code> для изменения стилей блока после каждого изменения размера окна</Description>
      </header>
      <main></main>
    </article>
  );
}