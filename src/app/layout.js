import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = IBM_Plex_Mono({ subsets: ["latin"], display: "swap", style: "normal", weight: ["400", "700"]});

export const metadata = {
  title: "Fahri Maulana Al Ghazali",
  description: "Fullstack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
