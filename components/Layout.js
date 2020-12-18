import Navigation from "./Navigation";
import Head from 'next/head'
 
function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>yusuf</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>yusuf was here!!</footer>
    </div>
  );
}

export default Layout;
