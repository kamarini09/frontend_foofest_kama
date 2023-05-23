import "@/styles/globals.css";
import { StoreProvider } from "@/context/storeContext";
import { TimerProvider } from "@/context/TimerContext";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {
  const router = useRouter();
  const activePages = ["/accomodations", "/guests", "/payment"]; 
  const isTimerActive = activePages.includes(router.pathname);

  return (
    <StoreProvider>
      {isTimerActive && (
        <TimerProvider>
          <Component {...pageProps} />
        </TimerProvider>
      )}
      {!isTimerActive && <Component {...pageProps} />}
    </StoreProvider>
  );
}
