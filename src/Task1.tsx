import { useLayoutEffect, useState } from "react";
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

const Main = styled.main`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

interface ScalableProps {
  readonly $width: number;
  readonly $height: number;
}

const Scalable = styled.div<ScalableProps>((props) => ({
  backgroundColor: 'blue',
  border: '1px solid gray',
  width: `${props.$width}px`,
  height: `${props.$height}px`,
}));

export default function Task1() {
  const [scalableHeight, setScalableHeight] = useState(0);
  const [scalableWidth, setScalableWidth] = useState(0);

  function resize() {
    const { clientHeight, clientWidth } = document.documentElement;

    const width = clientWidth / 2;
    const height = clientHeight / 2;

    setScalableHeight(height);
    setScalableWidth(width);
  }

  useLayoutEffect(() => {
    resize();
    window.addEventListener('resize', resize);
  }, []);

  return (
    <article>
      <header>
        <Title>Задача 1</Title>
        <Subtitle>Создание компонента с использованием <code>useLayoutEffect</code></Subtitle>
        <Description>Создайте компонент, который меняет размер и позицию блока в зависимости от размеров окна браузера ( например так чтобы имел половину ширины экрана  и высоты) . Используйте <code>useLayoutEffect</code> для изменения стилей блока после каждого изменения размера окна</Description>
      </header>
      <Main>
        <Scalable $width={scalableWidth} $height={scalableHeight} />
      </Main>
    </article>
  );
}
