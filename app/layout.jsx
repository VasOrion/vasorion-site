import "./globals.css";

export const metadata = {
  title: "VASORION — system over noise",
  description: "VasOrion: экосистема мышления, решений и цифровой идентичности.",
  icons: [{ rel: "icon", type: "image/svg+xml", url: "/favicon.svg" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}