import { Cormorant_Garamond, Inter, Caveat } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
});
const sans = Inter({ subsets: ["latin"], variable: "--font-inter" });
const hand = Caveat({ subsets: ["latin"], weight: ["600"], variable: "--font-caveat" });

export const metadata = {
  title: "Assar Patches — Custom PVC, Embroidered & Sublimation Patches",
  description:
    "Custom PVC, embroidered, sublimation, woven and leather patches — export quality, made to your brand.",
  verification: {
    google: "8wvwqhSQ96s_olWjGlxjJbYm5FlJfA7_0m7Ft4hW2-E",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${hand.variable}`} suppressHydrationWarning>
      <body>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}