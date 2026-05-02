import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <main className="max-w-7xl mx-auto">{children}</main>
         <Footer></Footer>
      </body>
    </html>
  );
}
