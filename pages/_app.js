import '../styles/globals.css'
import RegisterProvider from "../context/Register";

function MyApp({ Component, pageProps }) {
  return (
      <RegisterProvider>
          <Component {...pageProps} />
      </RegisterProvider>
  )
}

export default MyApp
