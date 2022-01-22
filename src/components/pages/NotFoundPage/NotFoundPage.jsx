import s from './NotFoundPage.module.css';
//если пользователь перейдет на страницу которой не существует
export default function NotFoundPage() {
  return <h1 className={s.errorPage}> 404 Страница не найдена :( </h1>;
}
