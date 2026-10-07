import Link from "next/link";
import { Unbounded } from "next/font/google";
import { Background } from "./components/background";
import { ProjectsSection } from "./components/projects-section";
import { TechMarquee } from "./components/tech-marquee";

// isim için geniş ve yuvarlak bir font, latin-ext Türkçe harfler için
const isimFontu = Unbounded({
  subsets: ["latin", "latin-ext"],
  weight: ["800"],
});

const AD = "Baran";
const SOYAD = "Sural";

// ismin yanındaki profil kutusu, tıklayınca özgeçmiş sayfasına gider
const profilSatirlari = [
  { k: "okul", v: "Namık Kemal Üniv." },
  { k: "staj", v: "Hotan Games" },
  { k: "proje", v: "Otonom araç" },
  { k: "diller", v: "Python · C# · TS" },
];

function ProfilKutusu({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/ozgecmis"
      className={`group block border border-border bg-background/60 p-5 text-left backdrop-blur transition hover:border-accent ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent text-sm font-bold text-white">
          BS
        </span>
        <div>
          <p className="font-bold leading-tight">Baran Sural</p>
          <p className="font-mono text-[11px] text-muted">
            Bilgisayar Mühendisliği · 3. sınıf
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-muted">
        Namık Kemal Üniversitesi&apos;nde okuyorum. Oyun, web ve otonom
        sistemler üzerine üretmeyi seviyorum.
      </p>

      <dl className="mt-4 border-t border-border font-mono text-xs">
        {profilSatirlari.map((s) => (
          <div
            key={s.k}
            className="flex justify-between gap-4 border-b border-border py-2"
          >
            <dt className="text-muted">{s.k}</dt>
            <dd className="text-right">{s.v}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-4 text-xs font-bold uppercase tracking-widest text-accent transition group-hover:translate-x-1">
        Özgeçmişi gör →
      </p>
    </Link>
  );
}

// iletişim bölümündeki üç kutu
const iletisimKutulari = [
  {
    etiket: "e-posta",
    deger: "contact@baransural.com",
    href: "mailto:contact@baransural.com",
    dis: false,
  },
  {
    etiket: "github",
    deger: "github.com/baransural",
    href: "https://github.com/baransural",
    dis: true,
  },
  {
    etiket: "linkedin",
    deger: "linkedin.com/in/baransural",
    href: "https://www.linkedin.com/in/baransural",
    dis: true,
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <Background />

      {/* hero: ortada isim */}
      <section className="mx-auto flex min-h-[85vh] w-full max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
        <p className="font-mono text-sm text-accent">● MERAKLI, ÜRETEN, ÖĞRENEN ve ÖĞRENCİ</p>

        {/* isim bloğu: profil kutusu bunun sağına yerleşiyor, isim yerinden oynamıyor */}
        <div className="relative mt-8 inline-block">
          <h1
            className={`${isimFontu.className} break-words text-[clamp(2.25rem,8.5vw,6.5rem)] font-extrabold uppercase leading-[1.05] tracking-tight`}
          >
            <span className="block">{AD}</span>
            {/* soyad beyazdan kırmızıya geçen renkle */}
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--foreground) 0%, var(--accent) 70%)",
              }}
            >
              {SOYAD}
            </span>
          </h1>

          {/* çok geniş ekranda (1280px ve üstü) ismin sağında */}
          <ProfilKutusu className="absolute left-full top-1/2 ml-10 hidden w-72 -translate-y-1/2 xl:block" />
        </div>

        {/* daha dar ekranda ismin altında */}
        <ProfilKutusu className="mt-8 w-full max-w-sm xl:hidden" />

        {/* ismin altında kısa kırmızı çizgi */}
        <div className="mt-8 h-1 w-20 bg-accent" />

        <p className="mt-8 text-xl font-medium tracking-tight sm:text-2xl">
          Bilgisayar mühendisliği öğrencisi.
        </p>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-muted">
          Namık Kemal Üniversitesi&apos;nde okuyorum. Oyundan web&apos;e,
          otonom sistemlerden daha fazlasına; öğrenmeye ve üretmeye her alanda
          açığım.
        </p>
      </section>

      <ProjectsSection />

      {/* aşağıda kayan teknoloji şeridi */}
      <TechMarquee />

      {/* iletişim: kırmızı dolu büyük panel */}
      <section id="iletisim" className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-24">
        <div className="relative overflow-hidden bg-accent px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          {/* panelin arkasında silik ızgara */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* köşeden hafif ışık */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl"
          />

          <div className="relative">
            <p className="font-mono text-sm text-white/80">● iletişim</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Birlikte bir şeyler
              <br />
              üretelim.
            </h2>
            <p className="mx-auto mt-6 max-w-lg leading-7 text-white/85">
              Bir proje fikrin, staj ya da iş birliği teklifin varsa yaz. En
              kısa sürede dönerim.
            </p>

            {/* ana buton: beyaz zemin, kırmızı yazı */}
            <a
              href="mailto:contact@baransural.com"
              className="mt-10 inline-block bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-accent transition hover:bg-white/90"
            >
              E-posta gönder →
            </a>

            {/* üç iletişim kutusu */}
            <ul className="mt-12 grid gap-3 text-left sm:grid-cols-3">
              {iletisimKutulari.map((k) => (
                <li key={k.etiket}>
                  <a
                    href={k.href}
                    target={k.dis ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="block border border-white/30 p-4 transition hover:border-white hover:bg-white/10"
                  >
                    <span className="block font-mono text-[11px] uppercase tracking-widest text-white/70">
                      {k.etiket}
                    </span>
                    <span className="mt-2 block break-all text-sm font-bold">
                      {k.deger}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted">
        © 2026 {AD} {SOYAD}
      </footer>
    </main>
  );
}