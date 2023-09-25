import styled from 'styled-components';

const ThumbImage = styled('div')(() => {
  return {
    color: 'red',
    width: 150,
    height: 225,
    border: '1px solid black',
  };
});

const CastList = styled('ul')(() => {
  return {
    listStyle: 'none',
  };
});

export { ThumbImage, CastList };
