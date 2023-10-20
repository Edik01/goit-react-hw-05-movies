import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsByIdMovie } from 'service/themoviedbAPI';
const Reviews = () => {
  const [reviews, setReviews] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const fetchReviews = async () => {
      const result = await fetchReviewsByIdMovie(id);

      setReviews(result);
    };
    fetchReviews();
  }, [id]);
  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(({ author, id, content }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default Reviews;
