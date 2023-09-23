import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled('div')(() => {
  return {
    display: 'flex',
  };
});

const ThumbStats = styled('div')(() => {
  return {
    padding: '0 20px',
  };
});

const SpanStyled = styled('span')(() => {
  return {
    display: 'inline-block',
    fontWeight: 700,
    margin: '10px 0',
  };
});

const ListDetails = styled('ul')(() => {
  return {
    listStyle: 'inside',
    margin: '20px 0',
  };
});

const LinkStyled = styled(NavLink)(() => {
  return {
    color: 'black',
    '&.active': {
      color: 'red',
    },
  };
});

export { Container, ThumbStats, SpanStyled, ListDetails, LinkStyled };
