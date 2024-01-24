import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} md:w-[800px] lg:w-[1000px] xl:w-[1250px] mx-auto md:mr-40 lg:mr-auto`}>
        <div className="flex">
          <div>
            <LeftSidebar />
          </div>
          <div className="flex flex-col md:w-[80%] lg:w-full border-r border-l border-black">
            <Navbar />
            {children}
          </div> 
          <div>
            <RightSidebar />
          </div>
        </div> 
      </body>
    </html>
  );
}
