import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactGA from "react-ga4";
import Script from "next/script";
import WhatsApp from "@/components/Whatsapp/Whatsapp";
import { Toaster } from 'react-hot-toast'
import InfoHeader from "@/components/Home/HeroOld/InfoHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zahads - Tax, Accounting and Business Advisory Services",
  description:
    "Zahads: Dubai's leading business consultancy. 8+ years of expertise in helping businesses succeed.",
  alternates: {
    canonical: "https://www.zahads.com/",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Zahads Chartered Accountants",
  telephone: "+971 56 7517147",
  description:
    "Zahads: Dubai's leading business consultancy. 8+ years of expertise in helping businesses succeed.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office 751, Tamani Arts Offices, Business Bay, Dubai",
    addressLocality: "Dubai",
    addressRegion: "United Arab Emirates",
    postalCode: "00000",
    addressCountry: "AE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  ReactGA.initialize("G-JH618P3CGT");
  const ogImage =
    "https://www.zahads.com/_next/static/media/Zahads%20Gold%20and%20Blue%20Large%20SVG%20-%20Without%20CA.aa73185b.svg";

  return (
    <html lang="en">
      <meta property="og:url" content="https://.zahads.com/" />
      <meta
        property="og:title"
        content="Zahads - Tax, Accounting and Business Advisory Services"
      />
      <meta
        property="og:description"
        content="Zahads: Dubai's leading business consultancy. 8+ years of expertise in helping businesses succeed"
      />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta
        name="google-site-verification"
        content="PdjX4inzl1yNhiQtCsIQlKCUSKOEbmhFXorNb5JG67Y"
      />
      <Script
        async
        // strategy='lazyLoad'
        src="https://www.googletagmanager.com/gtag/js?id=G-JH618P3CGT"
      ></Script>
      <Script>
        {` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JH618P3CGT');`}
      </Script>
      <Script type="application/ld+json">{JSON.stringify(schemaMarkup)}</Script>
      <body className={inter.className}>
        <div className="fixed top-0 left-0 w-full z-50">
          <InfoHeader />
          <Navbar />
        </div>
        {children}
        <Footer />
        <Toaster />
        <WhatsApp />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/663229c3a0c6737bd1333c4a/default';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
          crossOrigin="anonymous"
        // strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
