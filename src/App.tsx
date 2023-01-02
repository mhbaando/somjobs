/* eslint-disable array-callback-return */
import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import NotFound from '@error/404'
import Loader from './components/Shared/Loader'
import { privateRoutes, publicRoutes } from './routes/routes'

const App = (): React.ReactElement => {
  // TODO: impelement Guard and permission controll for the routes
  const auth = true
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {publicRoutes.map(({ path, Element, nested }) => {
          if (nested.length > 0) {
            return (
              <Route key={path} path={path}>
                <Route index element={<Element />} />
                {nested.map(({ path, Child }, i) => (
                  <Route key={i} path={path} element={<Child />} />
                ))}
              </Route>
            )
          }
          return <Route key={path} path={path} element={<Element />} />
        })}
        {/* privare routes */}
        {privateRoutes.map(({ path, Element, nested }) => {
          if (auth) {
            if (nested.length > 0) {
              return (
                <Route key={path} path={path} element={<Element />}>
                  {nested?.map(({ path, Child }, i) => (
                    <Route key={i} path={path} element={<Child />} />
                  ))}
                </Route>
              )
            }
            return <Route key={path} path={path} element={<Element />} />
          }
        })}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
export default App
