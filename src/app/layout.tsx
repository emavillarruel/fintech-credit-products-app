import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Crédito Ideal - Mercado Pago',
  description: 'Encontre o crédito certo, no momento certo, do jeito mais simples',
  keywords: ['mercado pago', 'crédito', 'empréstimo', 'linha de crédito', 'fintech'],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#3483FA" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans antialiased bg-mp-gray-50">
        <div id="root" className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
