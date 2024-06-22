import styled from "styled-components";

const Button = styled.button`
  padding: 2px 10px;
  font-size: .8em;
`;

interface BtnFocusToProps {
  children: string;
  element: HTMLInputElement | null;
}

export default function BtnFocusTo({ children, element }: BtnFocusToProps) {
  return <Button type="button" onClick={() => element?.focus()}>{children}</Button>;
}