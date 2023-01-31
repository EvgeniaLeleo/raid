import style from './style.module.css'

export const NotFound = () => {
  return (
    <div className={style.notFoundPage}>
      <div className={style.textWrapper}>
        <p className={style.text}>Page not found 404</p>
      </div>
    </div>
  )
}
