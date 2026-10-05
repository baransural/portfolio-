type Durum = 'devam' | 'tamamlandi';

type Proje = {
  slug: string;
  baslik: string;
  aciklama: string;
  durum: Durum;
  etiket: string; // kartın sağ altında görünen kısa not
  teknolojiler: string;
  href?: string; // varsa karta tıklayınca bu adres yeni sekmede açılır
};

// TODO: sonra backend'deki projects modülünden gelecek
const projeler: Proje[] = [
  {
    slug: 'game',
    baslik: 'Game',
    aciklama:
      'Şu an üzerinde çalıştığım oyun projesi. Adı ve tüm detayları çok yakında açıklanacak.',
    durum: 'devam',
    etiket: 'Yakında',
    teknolojiler: 'Detaylar yakında',
  },
  {
    slug: 'hotan-games-web',
    baslik: 'Hotan Games Web Sitesi',
    aciklama:
      "Hotan Games'in web sitesini geliştirdim. Projenin teknik detayları ve hikâyesi yakında burada olacak.",
    durum: 'tamamlandi',
    etiket: 'Hotan Games',
    teknolojiler: 'Detaylar yakında',
    href: 'https://hotangames.com/',
  },
  {
    slug: 'otonom-arac',
    baslik: 'Otonom Araç Projesi',
    aciklama:
      'Üniversitemizdeki otonom araç projesinde ekip üyesi olarak yer alıyorum. Çalışmanın ayrıntıları yakında paylaşılacak.',
    durum: 'devam',
    etiket: 'Okul projesi',
    teknolojiler: 'Detaylar yakında',
  },
];

// balonda ve noktada görünecek yazılar ve renkler
const durumBilgi: Record<Durum, { baslik: string; alt: string; nokta: string }> = {
  devam: {
    baslik: 'Devam ediyor',
    alt: 'Hâlâ üzerinde çalışıyorum',
    nokta: 'bg-amber-400 animate-pulse',
  },
  tamamlandi: {
    baslik: 'Tamamlandı',
    alt: 'Bu proje bitti',
    nokta: 'bg-emerald-500',
  },
};

// kartın ortak görünümü, linkli ve linksiz kartta aynı
const kartSinifi =
  'group relative flex aspect-square flex-col justify-between border border-border bg-foreground/[.03] p-6 outline-none transition hover:border-accent focus-visible:border-accent';

export function ProjectsSection() {
  return (
    <section id="projeler" className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-24 text-center">
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Projeler</h2>
      <div className="mx-auto mt-6 h-1 w-14 bg-accent" />

      {/* kare kartlar: balon yukarı açıldığı için satırlar arası boşluk geniş */}
      <div className="mt-16 grid gap-x-6 gap-y-14 text-left sm:grid-cols-2 lg:grid-cols-3">
        {projeler.map((p, i) => {
          const d = durumBilgi[p.durum];

          // kartın içeriği, linkli ya da linksiz kartta aynı
          const icerik = (
            <>
              {/* konuşma balonu: hover ya da klavye odağında görünür */}
              <span
                role="tooltip"
                className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-3 w-max max-w-[14rem] -translate-x-1/2 translate-y-1 rounded-lg border border-border bg-background px-4 py-2 text-center opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
              >
                <span className="block text-sm font-bold">{d.baslik}</span>
                <span className="block text-xs text-muted">{d.alt}</span>
                {/* balonun kuyruğu */}
                <span className="absolute left-1/2 top-full -mt-1 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-border bg-background" />
              </span>

              {/* üst satır: numara ve durum noktası */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={`h-3 w-3 rounded-full ${d.nokta}`} aria-label={d.baslik} />
              </div>

              {/* orta: başlık ve açıklama */}
              <div>
                <h3 className="text-2xl font-bold tracking-tight transition group-hover:text-accent">
                  {p.baslik}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{p.aciklama}</p>
              </div>

              {/* alt satır: teknolojiler ve etiket, linki olanda ok işareti */}
              <div className="flex items-end justify-between gap-4 font-mono text-xs text-muted">
                <span>{p.teknolojiler}</span>
                <span className="shrink-0">
                  {p.etiket}
                  {p.href && <span className="ml-1 text-accent">↗</span>}
                </span>
              </div>
            </>
          );

          // linki varsa yeni sekmede açılan bağlantı, yoksa tıklanamayan kart
          return p.href ? (
            <a
              key={p.slug}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={kartSinifi}
            >
              {icerik}
            </a>
          ) : (
            <div key={p.slug} tabIndex={0} className={kartSinifi}>
              {icerik}
            </div>
          );
        })}
      </div>
    </section>
  );
}