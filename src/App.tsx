import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { publicRoutes } from './routes/routes'
import Loader from './shared/components/Loader'

const App = (): React.ReactElement => {
  // TODO: impelement Guard and permission controll for the routes
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {publicRoutes.map(({ path, Element }) => {
          return <Route key={path} path={path} element={<Element />} />
        })}
      </Routes>
    </Suspense>
  )
}
export default App
