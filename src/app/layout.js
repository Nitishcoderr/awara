import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
      </body>
    </html>
  );
}
