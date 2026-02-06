'use client';

import {
    Facebook,
    History,
    Instagram,
    MessageCircle,
    ShoppingBag,
    Tags,
    Twitter,
} from 'lucide-react';
import { useSettings, type GeneratorId } from '@/context/settings-context';
import { cn } from '@/lib/utils';
import { ScrollArea } from "@/components/ui/scroll-area";


type NavigationProps = {
  activeView: string;
  setActiveView: (view: string) => void;
};

const allMenuItems: { id: GeneratorId | 'history' ; label: string; icon: React.ElementType }[] = [
    { id: 'instagram', label: 'Instagram', icon: Instagram },
    { id: 'facebook', label: 'Facebook', icon: Facebook },
    { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
    { id: 'twitter', label: 'X / Twitter', icon: Twitter },
    { id: 'product', label: 'Product', icon: ShoppingBag },
    { id: 'tagline', label: 'Tagline', icon: Tags },
    { id: 'history', label: 'History', icon: History },
];

export function Navigation({ activeView, setActiveView }: NavigationProps) {
    const { enabledGenerators } = useSettings();

    const menuItems = allMenuItems.filter(item => {
        if (item.id === 'history') return true;
        return enabledGenerators[item.id as GeneratorId];
    });

    return (
        <div className="mb-8">
            <ScrollArea className="w-full">
                <div className="border-b border-border">
                    <nav className="-mb-px flex justify-center space-x-2 sm:space-x-4" aria-label="Tabs">
                        {menuItems.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveView(tab.id)}
                            className={cn(
                            'group inline-flex items-center gap-2 whitespace-nowrap py-4 px-1 border-b-2 font-medium',
                            tab.id === activeView
                                ? 'border-primary text-primary'
                                : 'border-transparent text-muted-foreground hover:border-border hover:text-foreground'
                            )}
                        >
                            <tab.icon className="h-5 w-5" />
                            <span className="hidden sm:inline text-sm">{tab.label}</span>
                        </button>
                        ))}
                    </nav>
                </div>
            </ScrollArea>
        </div>
    );
}
