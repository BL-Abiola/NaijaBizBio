import { Header } from '@/components/header';
import { InstagramGenerator } from '@/components/instagram-generator';
import { TaglineGenerator } from '@/components/tagline-generator';
import { WhatsappGenerator } from '@/components/whatsapp-generator';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-background p-4 sm:p-8 md:p-12">
      <div className="w-full max-w-5xl space-y-16">
        <Header />
        <InstagramGenerator />
        <WhatsappGenerator />
        <TaglineGenerator />
      </div>
    </main>
  );
}
