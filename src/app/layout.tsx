import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "FingerPrintJS Test",
  description: "FingerPrintJS Test",
  icons: "/app-logo.png",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <FpjsProvider
          loadOptions={{
            apiKey: "dMJCMRIh9T1Zb7JJPYDw",
            endpoint: ["https://fp.minhchi.id.vn"],
            scriptUrlPattern: [
              "https://fp.minhchi.id.vn/web/v3/dMJCMRIh9T1Zb7JJPYDw/loader_v3.11.5.js",
            ],
            region: "ap",
          }}
        >
          {children}
        </FpjsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
