import "../style/globals.css";

export const metadata = {
  title: "Gota Alert SP",
  description: "Mapa inteligente de enchentes em tempo real para São Paulo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}