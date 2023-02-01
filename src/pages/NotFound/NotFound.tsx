import { PageWrapper } from '../PageWrapper/PageWrapper'

import style from './style.module.css'

export const NotFound = () => {
  return (
    <PageWrapper>
      <div className={style.textWrapper}>
        <p className={style.text}>Page not found 404</p>
      </div>
    </PageWrapper>
  )
}
