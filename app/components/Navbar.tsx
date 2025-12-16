export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="text-lg font-semibold gradient-text">hypeweb</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#uslugi" className="hover:opacity-80">Usługi</a>
          <a href="#proces" className="hover:opacity-80">Proces</a>
          <a href="#kontakt" className="hover:opacity-80">Kontakt</a>
        </nav>
        <a href="#kontakt" className="btn btn-primary text-sm">Wyceń projekt</a>
      </div>
    </header>
  );
}
