"use client";

import { useState } from 'react';
import { SettingsProvider } from '@/context/settings-context';
import { HistoryProvider } from '@/context/history-context';
import { InstagramGenerator } from '@/components/instagram-generator';
import { TaglineGenerator } from '@/components/tagline-generator';
import { WhatsappGenerator } from '@/components/whatsapp-generator';
import { HistoryPage } from '@/components/history-page';
import { AppLayout } from '@/components/app-layout';

export default function Home() {
  const [activeView, setActiveView] = useState('instagram');

  const renderView = () => {
    switch (activeView) {
      case 'instagram':
        return <InstagramGenerator />;
      case 'whatsapp':
        return <WhatsappGenerator />;
      case 'tagline':
        return <TaglineGenerator />;
      case 'history':
        return <HistoryPage />;
      default:
        return <InstagramGenerator />;
    }
  };

  return (
    <SettingsProvider>
      <HistoryProvider>
        <AppLayout activeView={activeView} setActiveView={setActiveView}>
          <div className="w-full max-w-2xl mx-auto">
            {renderView()}
          </div>
        </AppLayout>
      </HistoryProvider>
    </SettingsProvider>
  );
}
