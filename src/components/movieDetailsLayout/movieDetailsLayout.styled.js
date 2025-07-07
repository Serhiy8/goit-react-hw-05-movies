import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    `

const ThumbStats = styled.div`
padding: 0 20px;
`

const SpanStyled = styled.span`
    display: inline-block;
    font-weight: 700;
    margin: 10px 0;
  `

const ListStats = styled.ul`
  `
const ListDetails = styled.ul`
    margin: 20px 0;
  `

const LinkStyled = styled(NavLink)`
    color: blue;
    cursor: pointer;
    &.active {
      color: red;
    }
    `

export {
  Container,
  ThumbStats,
  SpanStyled,
  ListDetails,
  LinkStyled,
  ListStats,
};
