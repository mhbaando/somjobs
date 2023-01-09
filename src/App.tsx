/* eslint-disable array-callback-return */
import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import NotFound from '@error/404'
import Loader from './components/Shared/Loader'
import { privateRoutes, publicRoutes } from './routes/routes'
import useAuth from '@hooks/auth'

const App = (): React.ReactElement => {
  const auth = useAuth()
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
        {privateRoutes.map(({ path, Element, permission, nested }) => {
          if (auth.user?.role === permission) {
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
