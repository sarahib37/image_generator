import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
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
  title: "Dynamic Image Card | Refreshable Image Gallery with Swiper and Next.js",
  description: "Explore a beautiful dynamic card built with Next.js, Chakra UI, and Swiper.js. Instantly refresh and browse new high-quality images from Picsum with a seamless user experience.",
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
          <div>{children}</div>
       </Provider> 
      </body>
    </html>
  );
}
