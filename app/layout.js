import Provider from "../components/provider";
import "./globals.css";

export const metadata = {
  title: "Roberto RG - Homepage",
  description: "Oficial website.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
