import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabs Template SaaS",
  description: "Creer un site web SaaS avec Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(montserrat.className, "h-full overflow-x-hidden")}>
        {children}
      </body>
    </html>
  );
}
