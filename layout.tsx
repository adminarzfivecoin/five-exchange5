import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="container py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="logo" className="h-8 w-8 rounded-xl" />
          <span className="font-bold text-lg">FIVE Exchange</span>
        </div>
        <nav className="flex items-center gap-3 text-sm">
          <Link href="/" className="link">Swap</Link>
          <Link href="/pool" className="link">Pool</Link>
          <Link href="/stake" className="link">Stake</Link>
          <Link href="/analytics" className="link">Analytics</Link>
        </nav>
      </header>
      <main className="container pb-20">{children}</main>
      <footer className="container py-6 text-xs text-neutral-400">
        <p>© {new Date().getFullYear()} FIVE Exchange — MVP on TON</p>
      </footer>
    </div>
  );
}
