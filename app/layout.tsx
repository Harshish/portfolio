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
  openGraph: {
    title: "Harsis Yadav - Full-Stack Developer",
    description:
      "Welcome to my portfolio. I am a web developer specializing in front-end and back-end development.",
    url: "https://harshish.github.io/portfolio/",
    images: "https://harshish.github.io/portfolio/images/dp.jpg",
    locale: "en_US",
    siteName: "Harsis Yadav Dev Portfolio",
  },
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

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={metadata?.openGraph?.title as string}
        />
        <meta
          property="og:description"
          content={metadata?.openGraph?.description as string}
        />
        <meta
          property="og:image"
          content={metadata?.openGraph?.images as string}
        />
        <meta property="og:url" content={metadata?.openGraph?.url as string} />
        <meta property="og:locale" content={metadata?.openGraph?.locale} />
        <meta property="og:site_name" content={metadata?.openGraph?.siteName} />

        <script
          data-goatcounter="https://harshish-portfolio.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
