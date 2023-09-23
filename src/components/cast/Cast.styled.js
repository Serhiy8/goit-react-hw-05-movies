const { default: styled } = require('styled-components');

const ThumbImage = styled('div')(() => {
  return {
    color: 'red',
    width: 150,
    height: 225,
    border: '1px solid black',
  };
});

export { ThumbImage };
