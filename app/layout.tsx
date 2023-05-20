import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "AIRBNB: Clone App",
  description: "Airbnb Clone App for Portfolio",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
