import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledBackLink = styled(NavLink)`
    display: inline-flex;
    justify-content: center;
    padding: 8px;
    border: 1px solid black;
    border-radius: 3px;
    color: black;
    margin: 10px 0;
    &:hover {
      color: red;
      border: 1px solid red;
    }
  `