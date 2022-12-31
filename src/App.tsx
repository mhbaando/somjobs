import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { publicRoutes } from './routes/routes'
import Loader from './shared/components/Loader'
import NotFound from '@error/404'

const App = (): React.ReactElement => {
  // TODO: impelement Guard and permission controll for the routes
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {publicRoutes.map(({ path, Element, nestedpath, NestedElement }) => {
          if (nestedpath !== undefined && NestedElement !== undefined) {
            return (
              <Route key={path} path={path}>
                <Route index element={<Element />} />
                <Route path={nestedpath} element={<NestedElement />} />
              </Route>
            )
          }
          return <Route key={path} path={path} element={<Element />} />
        })}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
export default App
