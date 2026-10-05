'use client';

// buton tarayıcıda çalıştığı için client component
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

// güneş ikonu: koyu temadayken gösterilir, basınca açığa geçer
function SunIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

// ay ikonu: açık temadayken gösterilir, basınca koyuya geçer
function MoonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // sunucuda hangi tema seçili bilinmiyor, tarayıcıda yüklenene kadar bekle
  useEffect(() => setMounted(true), []);

  // yüklenene kadar aynı boyutta boş yer tut, buton zıplamasın
  if (!mounted) return <span className="inline-block h-9 w-9" aria-hidden />;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Açık temaya geç' : 'Koyu temaya geç'}
      className="flex h-9 w-9 items-center justify-center border border-border text-muted transition hover:border-accent hover:text-foreground"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}