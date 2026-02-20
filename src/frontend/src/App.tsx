import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/sonner';

const queryClient = new QueryClient();

function AppContent() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Hero />
          <Features />
          <HowItWorks />
          <WaitlistForm />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
