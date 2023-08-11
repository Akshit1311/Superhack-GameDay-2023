// Styles
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";
import "../styles/globals.css";

// Components
import ClientProvider from "@/components/ClientComponents/ClientProvider";

export const metadata = {
  title: "Web3-Conf",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
          {/* {children} */}
        </ClientProvider>
      </body>
    </html>
  );
}
