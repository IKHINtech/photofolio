import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "./components/footer";

const courierNew = localFont({
  src: "./fonts/courier-new-webfont.woff",
  variable: "--font-courier-new",
  weight: "100 900",
});

const courierNewBold = localFont({
  src: "./fonts/Courier-New-Bold-Italic-font.ttf",
  variable: "--font-courier-new-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sarikhin - Fullstack Developer",
  description: "Portfolio pribadi Sarikhin, seorang Fullstack Developer berpengalaman yang menguasai Nuxt, React, Go (Golang), dan Flutter untuk membangun aplikasi web dan mobile yang modern dan efisien. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="author" content="Sarikhin" />
      <meta name="keywords" content="Fullstack Developer, Nuxt, React, Go, Golang, Flutter, Web Development, Mobile Development, JavaScript, TypeScript, Backend, Frontend, Portfolio" />

      <meta property="og:title" content="Portfolio | Sarikhin - Fullstack Developer" />
      <meta property="og:description" content="Lihat portofolio Sarikhin, Fullstack Developer yang berpengalaman dalam pengembangan aplikasi menggunakan Nuxt, React, Go (Golang), dan Flutter." />
      <meta property="og:image" content="/profile.png " />
      <meta property="og:url" content="/profile.png" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Portfolio | Sarikhin - Fullstack Developer" />
      <meta name="twitter:description" content="Lihat portofolio Sarikhin, Fullstack Developer yang menguasai Nuxt, React, Go (Golang), dan Flutter." />
      <meta name="twitter:image" content="/profile.png" />
      <meta name="twitter:url" content="/profile.png " />
      <body
        className={`${courierNew.variable} ${courierNewBold.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
