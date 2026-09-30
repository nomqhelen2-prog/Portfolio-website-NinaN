import { Mail, MapPin, MessageCircle } from "lucide-react";

const EMAIL = "nomqhelen2@gmail.com";
const WHATSAPP_DISPLAY = "077 504 7789";
const WHATSAPP_LINK = "https://wa.me/263775047789";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-white/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-8 text-sm">
        <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="text-base font-bold text-white">NM</span>
            <span>© {new Date().getFullYear()} Nomqhele N Moyo</span>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#projects" className="hover:text-white">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-6">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 hover:text-white"
          >
            <MessageCircle className="h-4 w-4 shrink-0" />
            {WHATSAPP_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4 shrink-0" />
            {EMAIL}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0" />
            Bulawayo, Zimbabwe
          </span>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-2 border-t border-white/10 pt-4 text-xs text-white/40 sm:flex-row sm:gap-4">
          <a href="/privacy-policy.html" className="hover:text-white">
            Privacy Policy
          </a>
          <span className="hidden sm:inline">·</span>
          <a href="/terms-of-use.html" className="hover:text-white">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
}
