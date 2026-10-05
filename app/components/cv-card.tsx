// projelerin sağında duran CV tarzı kart, tıklayınca Hakkımda bölümüne gider
const bilgiler = [
  { k: "konum", v: "İstanbul" },
  { k: "alanlar", v: "Frontend, web oyunları" },
  { k: "araçlar", v: "Next.js, NestJS, Unity" },
];

export function CvCard() {
  return (
    <a
      href="#hakkimda"
      className="group block border border-border bg-foreground/[.03] p-6 text-left transition hover:border-accent"
    >
      {/* baş harfler */}
      <div className="flex h-14 w-14 items-center justify-center bg-accent text-lg font-bold text-white">
        BS
      </div>

      <h3 className="mt-5 text-2xl font-bold tracking-tight">Baran Sural</h3>
      {/* TODO: unvanımı yaz */}
      <p className="mt-1 font-mono text-xs text-accent">Frontend & Oyun Geliştirici</p>

      {/* TODO: kısa özet admin panelinden gelecek (about.bio) */}
      <p className="mt-4 text-sm leading-6 text-muted">
        Kendini anlatan kısa bir özet burada olacak. Ne yaptığını ve neye
        odaklandığını iki üç cümleyle yaz.
      </p>

      <dl className="mt-6 border-t border-border font-mono text-xs">
        {bilgiler.map((b) => (
          <div key={b.k} className="flex justify-between gap-4 border-b border-border py-2.5">
            <dt className="text-muted">{b.k}</dt>
            <dd className="text-right">{b.v}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-6 text-xs font-bold uppercase tracking-widest text-accent transition group-hover:translate-x-1">
        Özgeçmişi gör →
      </p>
    </a>
  );
}