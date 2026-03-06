export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-100 py-10 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
        <p>© 2024 BarberAI Manila. All rights reserved.</p>
        <div className="flex gap-8">
          <a className="hover:text-primary" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-primary" href="#">
            Terms of Service
          </a>
          <a className="hover:text-primary" href="#">
            Style Catalog
          </a>
        </div>
        <div className="text-slate-600">
          <span className="material-symbols-outlined text-xs">location_on</span>
          Makati, Philippines
        </div>
      </div>
    </footer>
  );
}
