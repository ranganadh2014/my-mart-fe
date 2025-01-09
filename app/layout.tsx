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
  // check whether authentication cookie available
  const isAuthenticated = !!((await cookies()).get("Authentication"));

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers authenticated={isAuthenticated}>
          {/*Normalize styles across various browsers & Consistent Default Styles */}
          <CssBaseline />
          {/* App Bar */}
          <Header />
          {/*Add 2.5rem margin on top for the contents. Skip for login screen */}
          <Container className={isAuthenticated? "mt-10": ""}>
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
