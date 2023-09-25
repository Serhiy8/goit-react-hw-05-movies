import styled from 'styled-components';

const ThumbForm = styled('div')(() => {
  return { padding: '20px 0' };
});

const FormSearch = styled('form')(() => {
  return {
    display: 'flex',
    width: 300,
    gap: 20,
    justifyContent: 'space-between',
    marginBottom: 20,
  };
});

const FormInput = styled('input')(() => {
  return {
    width: 210,
    border: 'none',
    outline: 'none',
    borderBottom: '1px solid gray',
  };
});

const FormButton = styled('button')(() => {
  return {
    padding: '6px 12px',
    borderRadius: 4,
    background: 'cornflowerblue',
    color: 'white',
    cursor: 'pointer',
    border: 'none',
    '&:hover': {
      background: 'blue',
    },
    '&:active': {
      transform: 'scale(0.95)',
    },
  };
});

export { ThumbForm, FormSearch, FormInput, FormButton };
