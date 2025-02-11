import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const noto = Noto_Sans({
  subsets: ["latin"],
});


export const metadata = {
  title: "Awara Hoon",
  description: "Love Travel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={noto}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
