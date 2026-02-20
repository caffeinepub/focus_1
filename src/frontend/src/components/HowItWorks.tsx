import { Download, Settings, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Download the App',
    description: 'Install Focus from the App Store or Google Play Store on your mobile device.',
  },
  {
    icon: Settings,
    title: 'Configure Your Preferences',
    description: 'Set up content filters and app time limits based on your goals and needs.',
  },
  {
    icon: CheckCircle,
    title: 'Stay Focused',
    description: 'Focus works in the background, protecting you from distractions automatically.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            How Focus Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in three simple steps
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                    {index + 1}
                  </div>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <step.icon className="h-7 w-7 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 mx-auto max-w-3xl rounded-2xl border border-border/50 bg-muted/30 p-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Why Native Mobile?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Focus requires deep system-level integration to effectively block content and manage app usage. 
              This level of control is only possible through native iOS and Android applications with proper 
              system permissions. We're working hard to bring Focus to your mobile device soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
