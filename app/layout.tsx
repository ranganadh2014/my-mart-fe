import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Container, CssBaseline} from "@mui/material";
import Header from "./header/header";
import { cookies } from "next/headers";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Mart",
  description: "Quality Products at affordable price",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = !!((await cookies()).get("Authentication"));
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers authenticated={isAuthenticated}>
          <CssBaseline />
          <Header />
          <Container>
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
