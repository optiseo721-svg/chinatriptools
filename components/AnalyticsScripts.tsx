"use client";

import { useEffect } from "react";
import Script from "next/script";
import { trackEvent } from "@/lib/analytics";
import { useCookieChoice } from "@/lib/cookieChoice";

type AnalyticsScriptsProps = {
  gaId?: string;
  clarityId?: string;
};

export function AnalyticsScripts({ gaId, clarityId }: AnalyticsScriptsProps) {
  const choice = useCookieChoice();

  useEffect(() => {
    if (choice !== "accepted") {
      return;
    }

    const pendingEvent = window.sessionStorage.getItem("ctt_pending_analytics_event");
    if (!pendingEvent) {
      return;
    }

    const timeout = window.setTimeout(() => {
      trackEvent(pendingEvent, { source: "cookie_banner" });
      window.sessionStorage.removeItem("ctt_pending_analytics_event");
    }, 1200);

    return () => window.clearTimeout(timeout);
  }, [choice, clarityId, gaId]);

  if (choice !== "accepted") {
    return null;
  }

  return (
    <>
      {gaId ? (
        <>
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
        </>
      ) : null}
      {clarityId ? (
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      ) : null}
    </>
  );
}
