import styled from "styled-components";

export const StatusIndicatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  /* margin-top: 20px; */
`;

export const StatusPin = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin-right: 8px;
`;

export const StatusText = styled.span`
  font-size: 1rem;
  color: #333;
  margin-left: 5px;
`;
