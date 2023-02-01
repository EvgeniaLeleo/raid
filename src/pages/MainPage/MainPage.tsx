import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { PageWrapper } from '../PageWrapper/PageWrapper'
import { TextWrapper } from '../../components/TextWrapper/TextWrapper'
import { Item } from '../../components/Item/Item'
import { URL_API } from '../../constants'
import { Data, Items } from '../../types'

import style from './style.module.css'

export const MainPage = () => {
  const [items, setItems] = useState<Items>([])

  const { isLoading, isError, data } = useQuery<Data>('itemsData', () =>
    fetch(URL_API).then((response) => response.json())
  )

  useEffect(() => {
    if (data?.items.length) {
      setItems(data.items)
      return
    }
  }, [data])

  return (
    <PageWrapper>
      <TextWrapper>
        <ul className={style.list}>
          <>
            {isLoading && <div>Загрузка данных...</div>}

            {isError && (
              <div>Произошла ошибка, не удалось загрузить данные!</div>
            )}

            {items.map((item, index) => (
              <li className={style.listItem} key={index + item}>
                <Item itemName={item} />
              </li>
            ))}
          </>
        </ul>
      </TextWrapper>
    </PageWrapper>
  )
}
