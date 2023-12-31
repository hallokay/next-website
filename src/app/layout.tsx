import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto, Poppins } from "next/font/google";
import { Navbar, Footer } from "@/components/index";
// import { ReduxProvider } from "@/store/provider";
// import { ThemeProvider } from "@/context/ThemeContext";
// import { useThemeContext } from "@/context/ThemeContext";

import Provider from "@/provider/Provider";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"], // preload에 사용할 subsets입니다.
  weight: ["100", "400", "700"],
  variable: "--roboto", // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
});
export const metadata: Metadata = {
  title: "lamamia website",
  description: "Next.js Full Tutorial for Beginners",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ReduxProvider>
    <html lang="en">
      <body className={roboto.className}>
        <Provider>
          <div className={`container`}>
            <Navbar />
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
    // </ReduxProvider>
  );
}
