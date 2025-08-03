export default function Home() {
  return (
    <main className="max-w-md mx-auto my-40 text-center space-y-4">
      <h1 className="text-4xl font-bold">Play I/O Today 🎮</h1>
      <p className="text-lg">Hyper-casual HTML5 games – launching soon.</p>
      <a className="text-blue-600 underline" href="mailto:hi@playiototoday.com">
        Contact us
      </a>
    </main>
  );
}
export const games = [
  {
    slug: 'stack',
    title: 'Stack',
    thumb: '/games/stack/cover.jpg',   // 静态图或外链皆可
    url: 'https://html5.gamemonetize.co/w6c1riuqxlu05k18ci5mazjcrl74jz6w/',    // 或外部 https://...
  }
];
