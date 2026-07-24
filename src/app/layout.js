// import { Cormorant_Garamond, Inter } from "next/font/google";
// import "./globals.css";

// const serif = Cormorant_Garamond({
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
//   variable: "--font-cormorant",
// });
// const sans = Inter({ subsets: ["latin"], variable: "--font-inter" });

// export const metadata = {
//   title: "Assar Patches — Custom PVC, Embroidered & Sublimation Patches",
//   description:
//     "Custom PVC, embroidered, sublimation, woven and leather patches — export quality, made to your brand.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
//       <body>{children}</body>
//     </html>
//   );
// }
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
});
const sans = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Assar Patches — Custom PVC, Embroidered & Sublimation Patches",
  description:
    "Custom PVC, embroidered, sublimation, woven and leather patches — export quality, made to your brand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <body>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}