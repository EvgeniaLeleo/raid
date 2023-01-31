import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { Item } from '../../components/Item'
import { URL_API } from '../../constants'

import style from './style.module.css'

export const MainPage = () => {
  const [items, setItems] = useState<string[]>([])

  const { isLoading, isError, data } = useQuery('itemsData', () =>
    fetch(URL_API).then((response) => response.json())
  )

  useEffect(() => {
    if (data?.items.length) {
      setItems(data.items)
      return
    }
  }, [data])

  return (
    <div className={style.main}>
      <ul className={style.list}>
        <>
          {isLoading && <div>Загрузка данных...</div>}

          {isError && <div>Произошла ошибка, не удалось загрузить данные!</div>}

          {items.map((item, index) => (
            <li className={style.listItem} key={index + item}>
              <Item itemName={item} />
            </li>
          ))}
        </>
      </ul>
    </div>
  )
}
