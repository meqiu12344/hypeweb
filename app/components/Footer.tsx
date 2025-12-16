export default function Footer() {
  return (
    <footer className="section pt-8">
      <div className="container border-t border-white/10 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm opacity-70">© {new Date().getFullYear()} hypeweb</div>
        <div className="text-sm opacity-80">Tworzymy strony, które działają dla biznesu.</div>
      </div>
    </footer>
  );
}
