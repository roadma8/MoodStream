"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MantineProvider
          theme={{ fontFamily: "Open Sans" }}
          withGlobalStyles
          withNormalizeCSS
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
