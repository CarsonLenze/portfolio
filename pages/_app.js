import { NextUIProvider, createTheme } from '@nextui-org/react';
import { motion } from "framer-motion";
import '@/styles/global.css'

const variants = {
  hidden: { opacity: 0, x: 200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
}

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      gradient: 'linear-gradient(to right, rgb(37, 99, 235), rgb(96, 165,250))',
      backgroundGradient: 'radial-gradient(circle at 10% 10%,rgba(245,164,227,.4) 10%,transparent 10.2%),radial-gradient(circle at 10% 10%,#fff 10%,transparent 10.2%),radial-gradient(circle at 90% 85%,rgba(94,226,255,.4) 20%,transparent 20.2%),radial-gradient(circle at 90% 85%,#fff 20%,transparent 20.2%),linear-gradient(200deg,#5ee2ff,#f5a4e3 60%)'
    }
  }
});

function App({ Component, pageProps }) {
  return (
    <NextUIProvider theme={lightTheme}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear' }}
      >
        <Component {...pageProps} />
      </motion.div>
    </NextUIProvider>
  );
}

export default App;