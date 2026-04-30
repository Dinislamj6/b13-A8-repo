import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const OutfitFont = Outfit({
  subsets: ["latin"],
});


export const metadata = {
  title: "Online Learning Platform",
  description: "this the best course for online learning in bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${OutfitFont.className} h-full antialiased`}
    >
      <body>
        <Navbar></Navbar>
        <main>{children}</main>
      </body>
    </html>
  );
}
