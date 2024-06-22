import { ReactElement } from "react";
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

interface TaskProps {
  title: string;
  subtitle: string | ReactElement;
  description: string | ReactElement;
  children: string | ReactElement;
}

export default function Task({
  title,
  subtitle,
  description,
  children
}: TaskProps) {
  return (
    <article>
      <header>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
      </header>
      <Main>
        {children}
      </Main>
    </article>
  );
}