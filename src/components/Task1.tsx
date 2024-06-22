import { useLayoutEffect, useState } from "react";
import styled from "styled-components";

import Task from "./Task";

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
    <Task
      title="Задача 1"
      subtitle={<>Создание компонента с использованием <code>useLayoutEffect</code></>}
      description={<>Создайте компонент, который меняет размер и позицию блока в зависимости от размеров окна браузера ( например так чтобы имел половину ширины экрана  и высоты) . Используйте <code>useLayoutEffect</code> для изменения стилей блока после каждого изменения размера окна</>}
    >
      <Scalable $width={scalableWidth} $height={scalableHeight} />
    </Task>
  );
}
