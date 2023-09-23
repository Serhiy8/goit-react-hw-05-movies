import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled('div')(() => {
  return {
    padding: '0 20px',
  };
});

const List = styled('ul')(() => {
  return {
    display: 'flex',
    gap: 20,
    fontSize: 20,
    padding: '14px 14px',
  };
});

const StyledLink = styled(NavLink)(() => {
  return {
    color: 'black',
    cursor: 'pointer',
    '&.active': {
      color: 'red',
    },
  };
});

const HeaderStyled = styled('header')(() => {
  return {
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.2)',
  };
});

export { List, StyledLink, HeaderStyled, Container };
