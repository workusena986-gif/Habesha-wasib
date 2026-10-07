import "./globals.css";

export const metadata = {
  title: "Habesha Wasib | Photo & Video Promotion",
  description: "Photo, video fi Telegram promotion Afaan Oromoo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="om">
      <body>{children}</body>
    </html>
  );
}
