import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Just Get Visible: Award Winning Web Design Agency in London",
  description: "Just Get Visible is an award-winning London-based web design agency, serving clients from start-ups to recognised brands for over 10 years.",
  openGraph: {
    title: "Just Get Visible: Award Winning Web Design Agency in London",
    description: "Just Get Visible is an award-winning London-based web design agency, serving clients from start-ups to recognised brands for over 10 years.",
    url: "https://justgetvisible.com/",
    images: [
      {
        url: "https://dev.justgetvisible.com/social.png",
        width: 800,
        height: 600,
        alt: "Just Get Visible"
      }
    ],
    siteName: "Just Get Visible Ltd",
    type: "website",
    locale: "en_IE"
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@handle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
