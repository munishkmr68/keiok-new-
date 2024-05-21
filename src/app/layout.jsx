"use client";
import "./globals.css";
import { useState, useEffect, createContext } from "react";
import Loader from "../common/Loader";
// import Header from "@/common/Header";
import Script from "next/script";
import IntlLang from "@/lang/IntlProvider";
import { Provider } from "react-redux";
import store from "@/services/Redux/store";
import { ContextData } from "@/services/Methods/normalMethods";
import RefferalPopup from "@/components/RefferalPopup/page";
import localStorageCall from "@/services/Methods/localstorage.hook";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const REFFERAL_VALUES = localStorageCall().getItem("refferal_link");
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // useEffect(() => {
  //   if (window.weglot) {
  //     window.Weglot.initialize({
  //       api_key: "",
  //     });

  //     window.Weglot.switchTo(router.locale);
  //     router.events.on('routeChangeComplete', () => {
  //       window.Weglot.switchTo(router.locale);
  //     })
  //   }

  // }, [])

  return (
    <IntlLang>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <Provider store={store}>
            <Script
              src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
              strategy="beforeInteractive"
            />

            {loading ? (
              <Loader />
            ) : (
              <>
                {/* <!-- ===== Header Start ===== --> */}

                {/* <Header {...{ REFFERAL_VALUES }} /> */}

                {/* <!-- ===== Header End ===== --> */}

                {/* <!-- ===== Main Content Start ===== --> */}
                <ContextData.Provider value={{ setLoading, REFFERAL_VALUES }}>
                  {/* <RefferalPopup /> */}
                  <main className="h-full">{children}</main>
                </ContextData.Provider>
                {/* <!-- ===== Main Content End ===== --> */}

                {/* <!-- ===== Footer Start ===== --> */}
              </>
            )}
          </Provider>
        </body>
      </html>
    </IntlLang>
  );
}
