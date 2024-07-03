import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/ChakraProvider/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Doc+",
  description: "This is the Home page",
};

export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <body className={inter.className}>
        <Providers>
        {children}
        </Providers>
        
        </body>
    </html>
  );
}
