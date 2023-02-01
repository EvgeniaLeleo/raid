import { PageWrapper } from '../PageWrapper/PageWrapper'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'

import style from './style.module.css'

export const NotFound = () => {
  return (
    <PageWrapper>
      <TextWrapper>
        <p className={style.text}>Page not found 404</p>
      </TextWrapper>
    </PageWrapper>
  )
}
