import { useEffect, useState } from 'react'

import { Item } from '../../components/Item'
import { URL_API } from '../../constants'

import style from './style.module.css'

export const MainPage = () => {
  const [items, setItems] = useState<string[]>([])

  const [appState, setAppState] = useState({
    loading: true,
    error: false,
  })

  useEffect(() => {
    fetch(URL_API)
      .then((response) => response.json())
      .then((data) => {
        setItems(data.items)
        setAppState({ loading: false, error: false })
      })
      .catch((error) => {
        console.log(error)
        setAppState({ loading: false, error: true })
      })
  }, [setAppState])

  return (
    <div className={style.main}>
      <ul className={style.list}>
        {appState.loading && <div>Загрузка данных...</div>}

        {appState.error && (
          <div>Произошла ошибка, не удалось загрузить данные!</div>
        )}

        {items.map((item, index) => (
          <li className={style.listItem} key={index + item}>
            <Item itemName={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
