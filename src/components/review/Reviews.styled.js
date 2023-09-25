import styled from 'styled-components';

const ReviewsList = styled('ul')(() => {
  return {
    listStyle: 'none',
  };
});

const ReviewsListItem = styled('li')(() => {
  return {
    borderBottom: '1px solid',
  };
});

export { ReviewsList, ReviewsListItem };
