
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NavbarComponent} from "@/components/navbar/NavbarComponent";
import {FooterComponent} from "@/components/footer/FooterComponent";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSTAD App",
  description: "Create ISTAD Website with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        {<header className=" bg-primary container w-screen">
          <NavbarComponent/>
          </header>}
        {children}
        {<footer className="mt-14">
          <FooterComponent/>
          </footer>}
        </body>
      
    </html>
  );
}