import { useEffect, useState } from 'react';
import { fetchCastById } from 'services/api';
import s from './Cast.module.css';
import image from 'images/image-not-found-vertical.png';
const Cast = ({ movieId }) => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchCastById(movieId).then(data => setActors(data.cast));
  }, [movieId]);

  return (
    <ul className={s.list}>
      {actors &&
        actors.map(({ cast_id, profile_path, name, character }) => (
          <li className={s.item} key={cast_id}>
            <img
              className={s.image}
              src={
                profile_path
                  ? `https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`
                  : image
              }
              height="175"
              width="138"
              alt={`Actor: ${name}`}
            />
            <div className={s.wrap}>
              <p className={s.charecter}>
                <span>Character:</span> {character}
              </p>
              <p className={s.name}>
                <span>Name:</span> {name}
              </p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
