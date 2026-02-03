"use client";

import { useSettings } from '@/context/settings-context';
import { Switch } from '@/components/ui/switch';
import { Label } from "@/components/ui/label";

export function Settings() {
  const { nigerianTone, setNigerianTone, includeEmojis, setIncludeEmojis } = useSettings();

  return (
    <div className="space-y-4">
      <div className="flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
              <Label htmlFor="nigerian-tone-switch">Add Nigerian Flavour</Label>
              <p className="text-sm text-muted-foreground">Use local slang and a friendly, Naija tone.</p>
          </div>
          <Switch id="nigerian-tone-switch" checked={nigerianTone} onCheckedChange={setNigerianTone} />
      </div>
      <div className="flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
              <Label htmlFor="include-emojis-switch">Include Emojis</Label>
              <p className="text-sm text-muted-foreground">Make your bio pop with relevant emojis.</p>
          </div>
          <Switch id="include-emojis-switch" checked={includeEmojis} onCheckedChange={setIncludeEmojis} />
      </div>
    </div>
  );
}
