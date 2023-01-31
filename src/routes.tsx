import { Routes, Route } from 'react-router-dom'

import { ItemPage } from './pages/ItemPage/ItemPage'
import { MainPage } from './pages/MainPage/MainPage'
import { NotFound } from './pages/NotFound/NotFound'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/single.html/:item" element={<ItemPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
