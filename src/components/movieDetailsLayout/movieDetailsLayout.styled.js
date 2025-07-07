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
    display: flex;
    margin-top: 20px;
    gap: 1px
  `

const LinkStyled = styled(NavLink)`
    position: relative;
    display: block;
    padding: 6px 12px;
    border-radius: 4px 4px 0 0;
    color: blue;
    font-size: 18px;
    cursor: pointer;
    &.active {
      color: red;
      background-color: aliceblue;
    }
    &:hover {
      background-color: aliceblue;
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
