import type { Metadata } from "next";
import Link from "next/link";
import { Background } from "../components/background";

export const metadata: Metadata = {
  title: "Özgeçmiş — Baran Sural",
  description: "Baran Sural'ın özgeçmişi",
};

// ---- içerik burada, metinleri sadece bu dizilerden değiştireceğim ----
// TODO: sonra admin panelinden gelecek

const unvan = "Bilgisayar Mühendisliği Öğrencisi";

const ozet =
  "Namık Kemal Üniversitesi'nde Bilgisayar Mühendisliği öğrencisiyim. Oyun geliştirme ve web geliştirme alanlarına özel ilgim var; Next.js, React.js ve modern web teknolojileriyle web siteleri, Unity ile oyun projeleri geliştirdim. Şu anda becerilerimi gerçek projelerde kullanabileceğim ve sektörden deneyim kazanabileceğim bir yazılım stajı arıyorum.";

const iletisim = [
  { k: "okul", v: "Namık Kemal Üniversitesi" },
  { k: "e-posta", v: "contact@baransural.com", href: "mailto:contact@baransural.com" },
  { k: "github", v: "github.com/baransural", href: "https://github.com/baransural" },
  {
    k: "linkedin",
    v: "linkedin.com/in/baransural",
    href: "https://www.linkedin.com/in/baransural",
  },
];

const deneyim = [
  {
    donem: "Devam ediyor",
    baslik: "Web Geliştirme Stajyeri",
    kurum: "Hotan Games",
    aciklama:
      "Hotan Games'in resmi web sitesini tasarladım ve geliştirdim. Arayüzü React.js, Next.js ve modern web teknolojileriyle kurdum; sayfa düzenini, mobil uyumu ve kullanıcı deneyimini sürekli iyileştiriyorum.",
  },
  {
    donem: "Devam ediyor",
    baslik: "Ekip Üyesi",
    kurum: "Otonom Araç Projesi — Namık Kemal Üniversitesi",
    aciklama:
      "Üniversitemizin otonom araç ekibinde yazılım geliştirici olarak görev alıyorum. Otonom çalışma için yazılım entegrasyonu ve kontrol sistemleri üzerinde çalışıyorum. Python ve C# kullanıyorum.",
  },
  {
    donem: "Süreklidir",
    baslik: "Oyun Geliştirme Projeleri",
    kurum: "Unity, C#",
    aciklama:
      "Oynanış programlaması ve oyun mekanikleri üzerine oyun projeleri geliştirdim. Unity motorunda, oyun tasarımında ve problem çözmede uygulamalı deneyim kazandım.",
  },
];

const egitim = [
  {
    donem: "2023 – 2028 (beklenen)",
    baslik: "Bilgisayar Mühendisliği (Lisans)",
    kurum: "Namık Kemal Üniversitesi",
    aciklama:
      "3. sınıf öğrencisi. İlgili dersler: Veri Yapıları, Algoritmalar, Nesne Yönelimli Programlama, Veritabanı Sistemleri.",
  },
];

const yetenekler = [
  { grup: "Programlama dilleri", liste: ["Python", "C#", "TypeScript", "JavaScript"] },
  {
    grup: "Web geliştirme",
    liste: ["Next.js", "React.js", "NestJS", "PostgreSQL", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    grup: "Oyun geliştirme",
    liste: ["Unity", "Oynanış programlama", "Oyun mekanikleri"],
  },
  { grup: "Diller", liste: ["Türkçe (ana dil)", "İngilizce (orta seviye)"] },
  {
    grup: "İlgi alanları",
    liste: ["Oyun geliştirme", "Web geliştirme", "Otonom sistemler", "Teknoloji"],
  },
];

type Kayit = {
  donem: string;
  baslik: string;
  kurum: string;
  aciklama: string;
};

// çizgi üzerinde zaman akışı, deneyim ve eğitimde ortak kullanılıyor
function ZamanAkisi({ kayitlar }: { kayitlar: Kayit[] }) {
  return (
    <ol className="border-l border-border">
      {kayitlar.map((k) => (
        <li key={k.baslik + k.kurum} className="relative pb-10 pl-8 last:pb-0">
          {/* çizgi üzerindeki nokta */}
          <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 bg-accent" />
          <p className="font-mono text-xs text-muted">{k.donem}</p>
          <h3 className="mt-1 text-xl font-bold tracking-tight">{k.baslik}</h3>
          <p className="text-sm text-accent">{k.kurum}</p>
          <p className="mt-3 text-sm leading-6 text-muted">{k.aciklama}</p>
        </li>
      ))}
    </ol>
  );
}

// sol tarafta başlık, sağ tarafta içerik olan bölüm iskeleti
function Bolum({
  no,
  baslik,
  children,
}: {
  no: string;
  baslik: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-6 border-t border-border py-12 md:grid-cols-[12rem_1fr] md:gap-12">
      <div>
        <p className="font-mono text-sm text-accent">{no}</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight">{baslik}</h2>
      </div>
      <div>{children}</div>
    </section>
  );
}

export default function Ozgecmis() {
  return (
    <main className="flex-1">
      <Background />

      <div className="mx-auto w-full max-w-4xl px-6 pb-24 pt-16">
        <Link
          href="/"
          className="font-mono text-sm text-muted transition hover:text-accent"
        >
          ← Ana sayfa
        </Link>

        {/* üst bilgi: ortada isim ve unvan */}
        <header className="pb-14 pt-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center bg-accent text-xl font-bold text-white">
            BS
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
            Baran <span className="text-accent">Sural</span>
          </h1>
          <p className="mt-3 font-mono text-sm text-muted">{unvan}</p>
        </header>

        <Bolum no="01" baslik="Özet">
          <p className="leading-7 text-muted">{ozet}</p>

          <dl className="mt-8 border-t border-border font-mono text-sm">
            {iletisim.map((i) => (
              <div key={i.k} className="flex justify-between gap-6 border-b border-border py-3">
                <dt className="text-muted">{i.k}</dt>
                <dd className="break-all text-right">
                  {i.href ? (
                    <a
                      href={i.href}
                      target={i.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="transition hover:text-accent"
                    >
                      {i.v}
                    </a>
                  ) : (
                    i.v
                  )}
                </dd>
              </div>
            ))}
          </dl>

 {/* CV butonu: PDF'i yeni sekmede açar */}
<div className="mt-6 flex justify-end">
  <a
    href="/BScv.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 border border-border bg-accent/10 px-6 py-3 font-mono text-xs text-accent transition hover:border-accent hover:bg-accent/20"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
    CV Görüntüle
  </a>
</div>
        </Bolum>

        <Bolum no="02" baslik="Deneyim">
          <ZamanAkisi kayitlar={deneyim} />
        </Bolum>

        <Bolum no="03" baslik="Eğitim">
          <ZamanAkisi kayitlar={egitim} />
        </Bolum>

        <Bolum no="04" baslik="Yetenekler">
          <div className="space-y-6">
            {yetenekler.map((g) => (
              <div key={g.grup}>
                <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                  {g.grup}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.liste.map((y) => (
                    <li
                      key={y}
                      className="border border-border px-3 py-1.5 text-sm transition hover:border-accent"
                    >
                      {y}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Bolum>
      </div>
    </main>
  );
}