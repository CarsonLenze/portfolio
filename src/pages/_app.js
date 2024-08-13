import "bootstrap/dist/css/bootstrap.min.css";
import "~/styles/globals.css";

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

function App({ Component, pageProps }) {
  return (
    <>
      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App;
