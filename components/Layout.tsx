/** @jsx h */
import { Head } from '$fresh/src/runtime/head.ts'
import { Fragment, h } from 'preact'
import Header from './Header.tsx'

type LayoutProps = {
  children: preact.ComponentChildren
}

const Layout: preact.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Arzivre</title>
        <meta name='description' content='Web Developer, Penulis' />
        <meta
          name='google-site-verification'
          content='NNclv3S6PJeXK0BGpcNEtxwDodjEIP7mzUJy4ok-UAo'
        />
        <meta
          property='og:image'
          content={`https://arzivre.deno.dev/images/profile.webp`}
        />
        <meta
          name='keywords'
          content='Jasa Buat Website Semarang, Website murah'
        />
      </Head>
      <Header />
      {children}
    </Fragment>
  )
}
export default Layout
