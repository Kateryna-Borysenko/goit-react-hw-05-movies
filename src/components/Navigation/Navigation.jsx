import { NavLink } from 'react-router-dom'; //позволяет показать активное состояние
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      exact //точное совпадение
      to="/"
      className={s.link}
      activeClassName={s.activeLink} //покажет астивную ссылку
    >
      Home
    </NavLink>

    <NavLink
      //не перезагружается страница просто меняется адрес
      to="/"
      // to - куда я веду
      className={s.link}
      activeClassName={s.activeLink}
    >
      Search movies
    </NavLink>
  </nav>
);

export default Navigation;
