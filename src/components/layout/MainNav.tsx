import React from 'react';
import { Button } from '../../components/ui/Button';
import { Menu, Bell, Search, User } from 'lucide-react';
import { Input } from '../../components/ui/Input';

interface MainNavProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function MainNav({ sidebarOpen, setSidebarOpen }: MainNavProps) {
  return (
    <header className="h-16 shrink-0 border-b border-border/20 glass-effect px-6 flex items-center justify-between sticky top-0 z-10 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5 text-muted-foreground" />
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative rounded-full" aria-label="Notifications">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-school-primary" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full" aria-label="User menu">
          <User className="h-5 w-5 text-muted-foreground" />
        </Button>
      </div>
    </header>
  );
}
