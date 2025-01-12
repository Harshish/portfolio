import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Harsis Yadav - Full-Stack Developer",
  description:
    "Welcome to my portfolio. I am a web developer specializing in front-end and back-end development.",
  // openGraph: {
  //   title: "Harsis Yadav - Full-Stack Developer",
  //   description:
  //     "Welcome to my portfolio. I am a web developer specializing in front-end and back-end development.",
  //   url: "https://yourportfolio.com",
  //   //image: "https://yourportfolio.com/images/portfolio_image.jpg",
  //   type: "website",
  //   locale: "en_US",
  //   siteName: "My Portfolio",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* General Meta Tags */}
        <meta name="description" content={metadata.description as string} />
        <meta
          name="keywords"
          content="portfolio, web developer, designer, Next.js, React"
        />
        <meta name="author" content="Your Name" />

        {/* Open Graph Meta Tags 
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        */}
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
