// components/Footer.tsx
"use client";

export default function Footer() {
  // Footer minimalista, sin logo y sin borde:
  // se mimetiza con el contenido del dashboard.
  return (
    <footer className="w-full py-6 px-6 md:px-8 bg-[#0e1511]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[#86948a]">
          © 2026 Tracki · Proyecto académico de CFGS DAM
        </p>
        <div className="flex items-center gap-6 text-xs text-[#86948a]">
          <a
            href="https://github.com/rubengiliramirez/tracki"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#dde4dd] transition-colors"
          >
            Código en GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
