import { Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { Providers } from "./providers";
import "@mantine/core/styles.css";

import { Footer, Header } from "../components/Index";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Help One",
  description: "Misson Reduce Hunger",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
