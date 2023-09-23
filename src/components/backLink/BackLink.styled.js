import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledBackLink = styled(NavLink)(() => {
  return {
    display: 'inline-flex',
    justifyContent: 'center',
    padding: 8,
    border: '1px solid black',
    borderRadius: 3,
    color: 'black',
    margin: '10px 0',
    '&:hover': {
      color: 'red',
      border: '1px solid red',
    },
  };
});
