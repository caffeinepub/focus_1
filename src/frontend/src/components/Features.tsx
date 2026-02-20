import { Shield, Clock, Lock, Smartphone, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Shield,
    title: 'Content Filtering',
    description: 'Advanced filtering system blocks inappropriate and adult content across all apps and browsers on your device.',
  },
  {
    icon: Clock,
    title: 'App Time Limits',
    description: 'Set custom time limits for any app. Once the limit is reached, the app locks for 12 hours to help you stay focused.',
  },
  {
    icon: Lock,
    title: 'Secure Protection',
    description: 'Tamper-proof system ensures settings cannot be bypassed. Your focus goals stay protected.',
  },
  {
    icon: Smartphone,
    title: 'Native Mobile App',
    description: 'Deep system integration on iOS and Android provides comprehensive protection and control.',
  },
  {
    icon: TrendingUp,
    title: 'Usage Analytics',
    description: 'Track your progress with detailed insights into your screen time and app usage patterns.',
  },
  {
    icon: Users,
    title: 'Family Profiles',
    description: 'Create separate profiles for family members with age-appropriate content filters and time limits.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Powerful Features for
            <span className="text-primary"> Digital Wellbeing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to create a healthier relationship with technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" strokeWidth={2} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
