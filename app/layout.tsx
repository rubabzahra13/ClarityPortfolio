import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Your Name - Software Engineer Portfolio",
  description: "Building digital experiences with clean code and modern tech",
  keywords: ["software engineer", "web developer", "react", "next.js"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - Software Engineer",
    description: "Building digital experiences with clean code and modern tech",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Software Engineer",
    description: "Building digital experiences with clean code and modern tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}