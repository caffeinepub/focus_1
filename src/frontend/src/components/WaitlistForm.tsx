import { useState } from 'react';
import { Mail, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Successfully joined the waitlist!', {
      description: "We'll notify you when Focus launches.",
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section id="waitlist" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold mb-3">
                Join the Waitlist
              </CardTitle>
              <CardDescription className="text-base">
                Be the first to know when Focus launches on iOS and Android. 
                Get early access and exclusive launch benefits.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 text-base"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-12 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    'Join Waitlist'
                  )}
                </Button>
              </form>

              <p className="mt-6 text-center text-sm text-muted-foreground">
                By joining, you agree to receive updates about Focus. 
                We respect your privacy and won't spam you.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
