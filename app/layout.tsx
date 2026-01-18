// app/layout.tsx
import "./globals.css";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
        {modal}
      </body>
    </html>
  );
}
