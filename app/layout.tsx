import { ThemeProvider } from "@/app/components/theme-provider";
import { cn } from "@/app/lib/utils";
import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import Navbar from "./components/Navbar";
import "./styles/globals.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Pagination",
  description: "Pagination by Om Patel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className=" container p-5">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
