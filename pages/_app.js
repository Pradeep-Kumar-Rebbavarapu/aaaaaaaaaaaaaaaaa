import Header from '../Components/Header'
import { ContextProvider } from '../Context/Context'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.js')
  }, []);
  return (
    <>
      <ContextProvider>
        <Header />
        <ToastContainer />
        <Component {...pageProps} />
      </ContextProvider>
    </>
  )
}

export default MyApp
