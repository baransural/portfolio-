'use client';

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

// "/#..." başında olduğu için özgeçmiş sayfasındayken de ana sayfaya dönüp kayar
const links = [
  { href: "/#projeler", label: "Projeler" },
  { href: "/ozgecmis", label: "Özgeçmiş" },
  { href: "/#iletisim", label: "İletişim" },
];

export function Navbar() {
  // telefonda menü açık mı
  const [acik, setAcik] = useState(false);

  return (
    // sayfa kayarken üstte kalsın
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="mx-auto max-w-4xl border border-border bg-background/80 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          {/* büyük BS logosu */}
          <Link
            href="/"
            onClick={() => setAcik(false)}
            className="text-3xl font-black leading-none tracking-tighter outline-none focus-visible:outline-2 focus-visible:outline-accent"
          >
            B<span className="text-accent">S</span>
          </Link>

          <div className="flex items-center gap-3">
            {/* geniş ekranda bağlantılar yan yana, üstüne gelince altı kırmızı çizilir */}
            <ul className="hidden items-center gap-6 text-xs uppercase tracking-widest text-muted md:flex">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="border-b-2 border-transparent pb-1 transition hover:border-accent hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* tema butonu: dar ve orta ekranda kutunun içinde */}
            <div className="lg:hidden">
              <ThemeToggle />
            </div>

            {/* hamburger: sadece telefonda */}
            <button
              type="button"
              onClick={() => setAcik((a) => !a)}
              aria-label={acik ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={acik}
              className="flex h-9 w-9 items-center justify-center border border-border text-muted transition hover:border-accent hover:text-foreground md:hidden"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                {acik ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* telefonda açılan menü */}
        {acik && (
          <ul className="border-t border-border text-sm uppercase tracking-widest md:hidden">
            {links.map((link) => (
              <li key={link.href} className="border-b border-border last:border-b-0">
                <Link
                  href={link.href}
                  onClick={() => setAcik(false)}
                  className="block px-4 py-4 text-muted transition hover:text-accent sm:px-6"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* tema butonu kutunun dışında, sadece geniş ekranda (1024px ve üstü) */}
      <div className="absolute right-4 top-4 hidden h-16 items-center lg:flex">
        <ThemeToggle />
      </div>
    </header>
  );
}