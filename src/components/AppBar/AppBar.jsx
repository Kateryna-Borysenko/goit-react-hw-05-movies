import Navigation from 'components/Navigation/Navigation';
import s from './Appbar.module.css';

export default function Appbar() {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
}
