import styled from 'styled-components';

const ReviewsList = styled.ul`
`

const ReviewsListItem = styled('li')(() => {
  return {
    borderBottom: '1px solid',
  };
});

export { ReviewsListItem, ReviewsList };
