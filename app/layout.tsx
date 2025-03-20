import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import Header from '../components/Header'
import { Provider } from "@/components/ui/provider.jsx";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Herbode - A Safe Space For Women, By Women.",
  description: "Herbode is a safe and empowering space for women, built by women. Join a supportive community dedicated to growth, advocacy, and meaningful connections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-p-28 scroll-smooth" >
      <head>
        <link rel="icon" href="/TickTockLogo.webp" sizes="any" />
      </head>
      <body className={`${playfair.variable} ${lora.variable} antialiased`}>
       <Provider>
          <Header/>
          <div>{children}</div>
       </Provider> 
      </body>
    </html>
  );
}
