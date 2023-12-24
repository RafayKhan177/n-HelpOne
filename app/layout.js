import { Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { Providers } from "./providers";
import "@mantine/core/styles.css";

import { Footer, Header } from "../components/Index";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AL-BASHIR",
  description: "Opposite of poverty is justice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.jpg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <MantineProvider>
            <Header />
            <NextTopLoader showSpinner={false} color="#e63946" />
            <section style={{ minHeight: "60vh" }}> {children}</section>
            <Footer />
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
