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

const ListStats = styled('ul')(() => {
  return {
    listStyle: 'none',
  };
});

const ListDetails = styled('ul')(() => {
  return {
    margin: '20px 0',
  };
});

const LinkStyled = styled(NavLink)(() => {
  return {
    color: 'blue',
    '&.active': {
      color: 'red',
    },
  };
});

export {
  Container,
  ThumbStats,
  SpanStyled,
  ListDetails,
  LinkStyled,
  ListStats,
};
