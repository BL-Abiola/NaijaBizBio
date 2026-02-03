"use client";

import { useState } from 'react';
import { ClipboardCopy, Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

type GenerationResultDialogProps = {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description: string;
    text: string;
};

export function GenerationResultDialog({
  isOpen,
  onOpenChange,
  title,
  description,
  text,
}: GenerationResultDialogProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setHasCopied(true);
    toast({
      title: "Copied to clipboard!",
      description: "You can now paste the generated text.",
    });
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="max-h-96 overflow-y-auto rounded-md bg-muted p-4 my-4">
            <p className="whitespace-pre-wrap text-sm text-muted-foreground">
                {text}
            </p>
        </div>
        <DialogFooter className="sm:justify-start">
          <Button onClick={handleCopy} variant="ghost" size="sm">
            {hasCopied ? (
              <Check className="mr-2 h-4 w-4 text-green-500" />
            ) : (
              <ClipboardCopy className="mr-2 h-4 w-4" />
            )}
            {hasCopied ? 'Copied!' : 'Copy'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
