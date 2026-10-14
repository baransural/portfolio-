const teknolojiler = [
  { isim: "Python", logo: "devicon-python-plain colored" },
  { isim: "C#", logo: "devicon-csharp-plain colored" },
  { isim: "Unity", logo: "devicon-unity-plain" },
  { isim: "TypeScript", logo: "devicon-typescript-plain colored" },
  { isim: "Next.js", logo: "devicon-nextjs-plain" },
  { isim: "NestJS", logo: "devicon-nestjs-plain colored" },
  { isim: "PostgreSQL", logo: "devicon-postgresql-plain colored" },
  { isim: "Tailwind CSS", logo: "devicon-tailwindcss-original colored" },
  { isim: "Docker", logo: "devicon-docker-plain colored" },
];

export function TechMarquee() {
  const liste = [...teknolojiler, ...teknolojiler];

  return (
    <section
      aria-label="Kullandığım teknolojiler"
      className="border-y border-border py-5"
    >
      <p className="text-center font-mono text-lg font-bold tracking-wider text-accent sm:text-xl">
        KULLANDIĞIM TEKNOLOJİLER
      </p>

      <div className="kayan-alan mt-8 overflow-hidden">
        <ul className="kayan-seri flex w-max">
          {liste.map((t, i) => (
            <li
              key={`${t.isim}-${i}`}
              aria-hidden={i >= teknolojiler.length}
              title={t.isim}
              className="mr-6 flex h-16 w-20 items-center justify-center transition-transform hover:scale-110 sm:mr-8 sm:h-20 sm:w-24"
            >
              <i
                className={`${t.logo} text-3xl sm:text-4xl`}
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}