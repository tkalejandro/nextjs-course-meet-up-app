import Layout from '../components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  {/* Here we use layout to put of navigation and other stuff, all the childrens will be inside. This page is the children */ }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
