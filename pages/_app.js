import '../styles/globals.scss'
import RegisterProvider from "../context/Register";

function MyApp({ Component, pageProps }) {
  return (
      <RegisterProvider>
          <Component {...pageProps} />
      </RegisterProvider>
  )
}

export default MyApp
