import { useParams } from 'react-router-dom'

import { PageWrapper } from '../PageWrapper/PageWrapper'

import style from './style.module.css'

export const ItemPage = () => {
  const itemName = useParams().item

  return (
    <PageWrapper>
      <div className={style.itemTextWrapper}>
        <p className={style.itemText}>
          This <span className={style.colorText}>is</span> page{' '}
          <span className={style.colorText}>for</span> {itemName}
        </p>
      </div>
    </PageWrapper>
  )
}
