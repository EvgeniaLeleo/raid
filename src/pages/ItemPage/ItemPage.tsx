import { useLocation } from 'react-router-dom'

import { PageWrapper } from '../PageWrapper/PageWrapper'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'

import style from './style.module.css'

export const ItemPage = () => {
  const location = useLocation()
  const itemName = new URLSearchParams(location.search).get('s')

  return (
    <PageWrapper>
      <TextWrapper>
        <p className={style.itemText}>
          This <span className={style.colorText}>is</span> page{' '}
          <span className={style.colorText}>for</span> {itemName}
        </p>
      </TextWrapper>
    </PageWrapper>
  )
}
