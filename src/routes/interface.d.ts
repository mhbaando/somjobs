/* eslint-disable @typescript-eslint/indent */
export interface PublicRoute {
  path: string
  Element: React.LazyExoticComponent<(props: any) => JSX.Element>
  nested: Array<{
    path: string | undefined
    Child: React.LazyExoticComponent<(props: any) => JSX.Element>
  }>
}

export interface PrivateRoute extends PublicRoute {
  permission: 'employee' | 'company'
}
