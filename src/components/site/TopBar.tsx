import { Mail, MapPin } from "lucide-react";

// A slim utility strip above the main nav — availability status on the
// left, real contact details on the right. Solid brand-blue, the way a
// company site's address/social bar sits above its white main navigation.
// Hidden on small screens to keep mobile headers uncluttered.
export function TopBar() {
  return (
    <div className="hidden bg-primary md:block">
      <div className="mx-auto flex h-9 max-w-5xl items-center justify-between px-6 text-xs text-primary-foreground/80">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
          Available for new projects
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            Remote · Worldwide
          </span>
          <a
            href="mailto:nomqhelen2@gmail.com"
            className="flex items-center gap-1.5 transition-colors hover:text-primary-foreground"
          >
            <Mail className="h-3.5 w-3.5" />
            nomqhelen2@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
