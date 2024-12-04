import Provider from "../../components/provider";

export const metadata = {
  title: "Works - Roberto RG ",
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
