"use client";

import { useEffect, useState } from 'react';
import { SettingsProvider } from '@/context/settings-context';
import { HistoryProvider } from '@/context/history-context';
import { TaglineGenerator } from '@/components/tagline-generator';
import { ProductDescriptionGenerator } from '@/components/product-description-generator';
import { SocialMediaGenerator } from '@/components/social-media-generator';
import { HistoryPage } from '@/components/history-page';
import { Header } from '@/components/header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { History, Share2, ShoppingBag, Tags } from 'lucide-react';

function AppContent() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 flex flex-col items-center">
        <div className="w-full max-w-3xl">
            <Header />
            <Tabs defaultValue="social" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="social">
                        <Share2 className="h-4 w-4 md:mr-2" />
                        <span className="hidden md:inline">Social</span>
                    </TabsTrigger>
                    <TabsTrigger value="tagline">
                        <Tags className="h-4 w-4 md:mr-2" />
                        <span className="hidden md:inline">Tagline</span>
                    </TabsTrigger>
                    <TabsTrigger value="product">
                        <ShoppingBag className="h-4 w-4 md:mr-2" />
                        <span className="hidden md:inline">Product</span>
                    </TabsTrigger>
                    <TabsTrigger value="history">
                        <History className="h-4 w-4 md:mr-2" />
                        <span className="hidden md:inline">History</span>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="social" className="mt-6">
                    <div className="w-full max-w-2xl mx-auto">
                        <SocialMediaGenerator />
                    </div>
                </TabsContent>
                <TabsContent value="tagline" className="mt-6">
                    <div className="w-full max-w-2xl mx-auto">
                        <TaglineGenerator />
                    </div>
                </TabsContent>
                <TabsContent value="product" className="mt-6">
                    <div className="w-full max-w-2xl mx-auto">
                        <ProductDescriptionGenerator />
                    </div>
                </TabsContent>
                <TabsContent value="history" className="mt-6">
                    <div className="w-full max-w-2xl mx-auto">
                        <HistoryPage />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    </div>
  );
}


export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <SettingsProvider>
      <HistoryProvider>
        {isClient ? <AppContent /> : null}
      </HistoryProvider>
    </SettingsProvider>
  );
}
