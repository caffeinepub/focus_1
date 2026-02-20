import { Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Coming Soon to Mobile
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Reclaim Your
            <span className="block text-primary mt-2">Digital Focus</span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Focus helps you build healthier digital habits by blocking distracting content and managing app usage time. Take control of your screen time and boost your productivity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToWaitlist} className="text-base px-8 h-12">
              <Shield className="mr-2 h-5 w-5" />
              Join the Waitlist
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="text-base px-8 h-12">
              Learn More
            </Button>
          </div>

          <div className="mt-16 rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Content Protection</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Active Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Customizable Limits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
