import fetchReviewsIPA from './reviewsAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetchReviewsIPA(id);
      setReviews(res.results);
      console.log(res);
    };

    if (id) {
      fetchReviews();
    }
  }, [id]);
  return (
    <ul>
      {reviews.length !== 0 ? (
        reviews.map(el => {
          return (
            <li key={el.id}>
              <p>{el.author}</p>
              <p>{el.content}</p>
            </li>
          );
        })
      ) : (
        <div>Не знайдено жодного відгуку</div>
      )}
    </ul>
  );
};

export default Reviews;
