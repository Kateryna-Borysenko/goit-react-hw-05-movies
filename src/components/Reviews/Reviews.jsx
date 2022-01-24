import PageHeading from 'components/common/PageHeading/PageHeading';
import { useState, useEffect } from 'react';
import { fetchReviewsById } from 'services/api';
import s from './Reviews.module.css';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviewsById(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <>
      <PageHeading text="Reviews" />
      <ul className={s.list}>
        {reviews.length !== 0 ? (
          reviews.map(({ id, author, content, created_at }) => (
            <li className={s.item} key={id}>
              <p>
                Nickname : <span className={s.author}> {author}</span>
              </p>
              <p className={s.content}>{content}</p>
              <span className={s.date}>
                {created_at.slice(0, 10).split('-').reverse().join('.')}
              </span>
            </li>
          ))
        ) : (
          <h1 className={s.message}>We have not any reviews yet .</h1>
        )}
      </ul>
    </>
  );
};

export default Reviews;
