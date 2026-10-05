'use client';

// next-themes tarayıcıda çalıştığı için bu dosya client component olmak zorunda
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ComponentProps } from 'react';

// layout.tsx server component kalsın diye provider'ı burada sarmalıyorum
export function ThemeProvider(props: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props} />;
}