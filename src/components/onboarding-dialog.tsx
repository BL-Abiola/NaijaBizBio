"use client";

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { KeyRound, Sparkles, Palette, ArrowLeft, ArrowRight, PartyPopper } from 'lucide-react';
import { cn } from '@/lib/utils';


type OnboardingDialogProps = {
  isOpen: boolean;
  onComplete: () => void;
};

export function OnboardingDialog({ isOpen, onComplete }: OnboardingDialogProps) {
  const [step, setStep] = useState(0);

  const handleNext = () => setStep(s => Math.min(3, s + 1));
  const handleBack = () => setStep(s => Math.max(0, s - 1));

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onComplete()}>
      <DialogContent className="max-w-md">
        <div className="min-h-[280px]">
            {step === 0 && (
                <>
                    <DialogHeader>
                        <DialogTitle className="text-center font-headline text-2xl">Welcome to SabiWriter!</DialogTitle>
                        <DialogDescription className="text-center">
                            Your AI-powered assistant for crafting expert content. Here’s a quick guide to get started.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-center p-8">
                        <PartyPopper className="h-20 w-20 text-primary" strokeWidth={1.5} />
                    </div>
                </>
            )}
            {step === 1 && (
                <>
                    <DialogHeader>
                        <DialogTitle className="text-center font-headline text-2xl">1. Set Your API Key</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 pt-6 text-sm text-foreground/90 text-center">
                        <div className="flex justify-center">
                            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <KeyRound className="h-8 w-8" />
                            </div>
                        </div>
                        <p className="text-muted-foreground px-4">
                            SabiWriter uses Google's Gemini AI. To begin, you need a free API key.
                            Go to <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="underline text-primary">Google AI Studio</a> to get your key. Then, go to <span className="font-semibold">Settings {'>'} Data</span> and paste it in.
                        </p>
                    </div>
                </>
            )}
            {step === 2 && (
                 <>
                    <DialogHeader>
                        <DialogTitle className="text-center font-headline text-2xl">2. Choose a Generator & Generate</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 pt-6 text-sm text-foreground/90 text-center">
                        <div className="flex justify-center">
                            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Sparkles className="h-8 w-8" />
                            </div>
                        </div>
                        <p className="text-muted-foreground px-4">
                            Use the top navigation to select a content type (like Instagram Bio or Tagline), fill out the form, and click "Generate" to get AI-powered suggestions.
                        </p>
                    </div>
                </>
            )}
            {step === 3 && (
                <>
                    <DialogHeader>
                        <DialogTitle className="text-center font-headline text-2xl">3. Customize Your Experience</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 pt-6 text-sm text-foreground/90 text-center">
                        <div className="flex justify-center">
                            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Palette className="h-8 w-8" />
                            </div>
                        </div>
                        <p className="text-muted-foreground px-4">
                           Explore the <span className="font-semibold">Settings</span> panel to switch to dark mode, adjust the AI's tone of voice, or manage which generators appear in your navigation bar.
                        </p>
                    </div>
                </>
            )}
        </div>

        <div className="flex justify-center gap-2 pt-2">
            {[0, 1, 2, 3].map((i) => (
                <button
                    key={i}
                    onClick={() => setStep(i)}
                    className={cn('h-2 rounded-full transition-all duration-300', i === step ? 'w-5 bg-primary' : 'w-2 bg-muted hover:bg-border')}
                    aria-label={`Go to step ${i + 1}`}
                />
            ))}
        </div>

        <DialogFooter className="flex justify-between items-center pt-6">
          <Button variant="outline" onClick={handleBack} className={cn(step === 0 && "invisible")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          {step < 3 ? (
            <Button onClick={handleNext}>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={onComplete}>Let's Get Started</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
