// iki sayfada da kullanılan sabit arka plan: ızgara ve kayan kırmızı ışıklar
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="arka-izgara absolute inset-0" />
      <div className="arka-isik-a absolute -left-1/4 -top-[10%] h-[40rem] w-[40rem] rounded-full bg-accent/20 blur-[120px]" />
      <div className="arka-isik-b absolute -right-1/4 top-1/3 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-[120px]" />
    </div>
  );
}