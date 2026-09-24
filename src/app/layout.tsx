import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TurantFix | Doorstep Device Repair",
  description: "Book transparent doorstep phone repair with verified local technician partners.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}