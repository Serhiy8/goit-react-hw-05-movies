import { fetchFromTMDbAPI } from 'API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsListItem, ReviewsList, ReviewsTextAuthor } from './reviewsStyle.styled';

const URL = 'https://api.themoviedb.org/3/movie/';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetchFromTMDbAPI(`${URL}${id}/reviews`, {});
        if (res) {
          setReviews(res.results);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchReviews();
    }
  }, [id]);

  return (
    <>
      <ReviewsList>
        {reviews === null ? (
          <div>Loading...</div>
        ) : reviews.length === 0 ? (
          <div>No reviews found</div>
        ) : (
          reviews.map(el => {
            return (
              <ReviewsListItem key={el.id}>
                <ReviewsTextAuthor>{el.author}</ReviewsTextAuthor>
                <p>{el.content}</p>
              </ReviewsListItem>
            );
          })
        )}
      </ReviewsList>
    </>
  );
};

export default Reviews;
