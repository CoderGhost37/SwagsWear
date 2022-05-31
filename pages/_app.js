import "../styles/globals.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <NextNProgress
        color="#ef4444"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Navbar />
      <Toaster />
      <Component {...pageProps} />
      <Footer />
    </StateContext>
  );
}

export default MyApp;
