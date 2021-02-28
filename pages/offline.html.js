import Head from 'next/head'

export default () => (
  <>
    <Head>
      <title>Sin Conexion a Internet</title>
    </Head>
    <h1>This is offline fallback page</h1>
    <h2>When offline, any route will fallback to this page</h2>
  </>
)