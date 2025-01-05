import Provider from "../components/provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata = {
  title: "Roberto RG - Homepage",
  description: "Oficial website.",
  icons: {
    icon: "/logo.jpg",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider>{children}</Provider>
        <SpeedInsights />
      </body>
    </html>
  );
}
