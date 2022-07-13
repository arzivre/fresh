/** @jsx h */
import { Fragment, h } from 'preact'
import Header from './Header.tsx'

type LayoutProps = {
  children: preact.ComponentChildren
}

const Layout: preact.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  )
}
export default Layout
