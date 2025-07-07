import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

const List = styled.ul`
    display: flex;
    gap: 20px;
    font-size: 20px;
    padding: 14px 0;
  `

const StyledLink = styled(NavLink)`
    color: black;
    cursor: pointer;
    &.active {
      color: red;
    }
`

const HeaderStyled = styled.header`
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    `

export { List, StyledLink, HeaderStyled };
