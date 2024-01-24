import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackBtn = styled(Link)`
  /* background-color: whitesmoke; */
  display: block;
  color: white;
  width: 250px;
  text-align: center;

  letter-spacing: 0.06em;
  border: 1px solid black;
  border-radius: 5px;
  margin: 15px;
  padding: 12px 18px;

  &:hover {
    color: whitesmoke;
    background-color: orange;
  }
`;
