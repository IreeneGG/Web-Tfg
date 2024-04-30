import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/component/footer";
import { NavBar } from "@/components/component/nav-bar";
import { Sidebar } from "@/components/component/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brot-x",
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.className}>
      <body className="w-screen h-screen p-0 m-0">
        <div className="page">
          <NavBar />
          {children}
        </div>


      </body>
    </html>
  );
}
