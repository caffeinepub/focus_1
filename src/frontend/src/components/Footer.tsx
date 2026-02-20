import { Shield, Heart } from 'lucide-react';
import { SiX, SiGithub, SiLinkedin } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'focus-app';

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary" strokeWidth={2.5} />
              <span className="text-xl font-bold">Focus</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Empowering you to build healthier digital habits and reclaim your focus 
              through intelligent content filtering and app management.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-foreground transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#waitlist" className="hover:text-foreground transition-colors">
                  Waitlist
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted hover:bg-accent transition-colors"
              >
                <SiX className="h-4 w-4" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted hover:bg-accent transition-colors"
              >
                <SiGithub className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted hover:bg-accent transition-colors"
              >
                <SiLinkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Focus. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="h-4 w-4 text-destructive fill-destructive" /> using{' '}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
