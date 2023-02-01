import { useParams } from 'react-router-dom'

import { PageWrapper } from '../PageWrapper/PageWrapper'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'

import style from './style.module.css'

export const ItemPage = () => {
  const itemName = useParams().item

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
