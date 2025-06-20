import "./globals.css";
import Navbar from "./components/Navbar";
import Providers from "./RTK/Providers";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "TechieBanda",
  description: "TechieBanda - A Tech Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="p-0 max-w-[1600px] m-auto dark:bg-indigo-950 scroll-smooth overflow-x-hidden">
        <Providers>
          <NextTopLoader color="#71d4cc" showSpinner={false} />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
