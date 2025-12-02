import type { Metadata } from "next";
import { Oxanium, Poppins } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-oxanium",
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "RoadPedal - Premium Cycling Equipment",
  description: "Discover the best cycling equipment and accessories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning  className={`${oxanium.variable} ${poppins.variable}` }>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
