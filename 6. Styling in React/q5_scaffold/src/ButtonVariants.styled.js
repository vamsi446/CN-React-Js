import styled from "styled-components";

export const ButtonView = styled.button`
  background-color: ${(props) => (props.filled ? props.bg : "#fff")};
  color: ${(props) => (props.filled ? props.color : "#000")};
  border-color: ${(props) => (!props.filled ? "": "#000")};
  border: ${(props)=>(props.filled ? "none":"")};
`;
