import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BullionDB - 실물 자산 실시간 가치 추적",
  description: "실물 은 및 귀금속 자산의 실시간 가치를 추적하는 대시보드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
