// ekranın altında kayan teknoloji şeridi
// TODO: listeyi istediğim gibi değiştireceğim
const teknolojiler = [
  "Python",
  "C#",
  "Unity",
  "TypeScript",
  "Next.js",
  "NestJS",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
];

export function TechMarquee() {
  // liste iki kez yazılıyor ki şerit kesintisiz dönsün
  const liste = [...teknolojiler, ...teknolojiler];

  return (
    <section aria-label="Kullandığım teknolojiler" className="border-y border-border py-14">
      <p className="text-center font-mono text-sm text-accent">Kullandığım teknolojiler</p>

      <div className="kayan-alan mt-8 overflow-hidden">
        <ul className="kayan-seri flex w-max">
          {liste.map((t, i) => (
            <li
              key={`${t}-${i}`}
              // ikinci kopya ekran okuyucularda tekrar okunmasın
              aria-hidden={i >= teknolojiler.length}
              className="mr-4 border border-border px-6 py-3 font-mono text-sm text-muted transition hover:border-accent hover:text-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}