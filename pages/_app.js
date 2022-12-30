import { NextUIProvider, createTheme } from "@nextui-org/react";
import '../styles/global.css'

const useDark = false

const lightTheme = createTheme({
  type: 'light',
  theme: {
    gradient: 'radial-gradient(circle at 10% 10%,rgba(245,164,227,.4) 10%,transparent 10.2%),radial-gradient(circle at 10% 10%,#fff 10%,transparent 10.2%),radial-gradient(circle at 90% 85%,rgba(94,226,255,.4) 20%,transparent 20.2%),radial-gradient(circle at 90% 85%,#fff 20%,transparent 20.2%),linear-gradient(200deg,#5ee2ff,#f5a4e3 60%)',
    breakpoints: {
      ss: '800px'
    }
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      heroBackground: 'radial-gradient(circle at 10% 10%, rgb(119, 90, 158) 10%, transparent 10.5%), radial-gradient(circle at 110% 90%, rgb(67, 64, 71) 30%, transparent 30.5%), linear-gradient(290deg, rgb(119, 90, 158) 0%, rgb(67, 64, 71) 40%)',
      IconsLight: '$secondary'
    }, 
  }
});

function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default App;