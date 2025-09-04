import "./globals.css";

export const metadata = {
  title: "Proton Clone",
  description: "Proton Landing Page Clone in Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
