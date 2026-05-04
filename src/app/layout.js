import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";




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
      data-theme="light"
      lang="en"
      className={`${OutfitFont.className} h-full antialiased`}
    >
      <body>
        <Navbar/>
        <main className="max-w-7xl mx-auto">{children}</main>
        <Footer/>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
