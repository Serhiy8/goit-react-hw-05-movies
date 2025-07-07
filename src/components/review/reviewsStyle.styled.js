import styled from 'styled-components';

const ReviewsList = styled.ul`
  background-color: aliceblue;
  padding: 20px 16px;
`

const ReviewsListItem = styled.li`
  border-bottom: 1px dashed black;
  padding: 16px 0;
`
const ReviewsTextAuthor = styled.p`
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 500;
`

export { ReviewsListItem, ReviewsList, ReviewsTextAuthor };
