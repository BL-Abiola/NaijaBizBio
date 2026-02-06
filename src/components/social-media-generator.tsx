"use client";

import { Instagram, MessageCircle, Twitter } from 'lucide-react';
import { InstagramGenerator } from '@/components/instagram-generator';
import { WhatsappGenerator } from '@/components/whatsapp-generator';
import { TwitterPostGenerator } from '@/components/twitter-post-generator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// This component is no longer in use. The navigation has been moved to the main page.
export function SocialMediaGenerator() {
  return (
    <Tabs defaultValue="instagram" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-6">
        <TabsTrigger value="instagram">
          <Instagram className="h-4 w-4 md:mr-2" />
          <span className="hidden md:inline">Instagram</span>
        </TabsTrigger>
        <TabsTrigger value="whatsapp">
          <MessageCircle className="h-4 w-4 md:mr-2" />
          <span className="hidden md:inline">WhatsApp</span>
        </TabsTrigger>
        <TabsTrigger value="twitter">
          <Twitter className="h-4 w-4 md:mr-2" />
          <span className="hidden md:inline">X / Twitter</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="instagram">
        <InstagramGenerator />
      </TabsContent>
      <TabsContent value="whatsapp">
        <WhatsappGenerator />
      </TabsContent>
      <TabsContent value="twitter">
        <TwitterPostGenerator />
      </TabsContent>
    </Tabs>
  );
}
