import "../styles/globals.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Navbar />
      <Toaster />
      <Component {...pageProps} />
      <Footer />
    </StateContext>
  );
}

export default MyApp;
