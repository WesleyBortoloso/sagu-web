import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { Button } from '../../components/ui/Button';
import { 
  Home, 
  Users, 
  AlertTriangle, 
  MessageSquare, 
  Calendar, 
  FileText, 
  FileCheck, 
  ChevronLeft,
  ChevronRight,
  User,
  LogOut
} from 'lucide-react';

interface SidebarNavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const navItems = [
  { name: 'Página Inicial', path: '/home', icon: Home },
  { name: 'Alunos', path: '/students', icon: Users },
  { name: 'Ocorrências', path: '/incidents', icon: AlertTriangle },
  { name: 'Orientações', path: '/guidance', icon: MessageSquare },
  { name: 'Atendimentos', path: '/appointments', icon: Calendar },
  { name: 'Relatórios', path: '/reports', icon: FileText },
  { name: 'Autorizações', path: '/authorizations', icon: FileCheck },
];

export function SidebarNav({ open, setOpen }: SidebarNavProps) {
  const location = useLocation();
  
  return (
    <aside
      className={cn(
        "bg-gradient-to-br from-sagu-primary to-sagu-accent text-white fixed inset-y-0 left-0 z-20 flex flex-col transition-transform duration-300 ease-in-out shadow-lg rounded-r-xl md:relative",
        open ? "w-64 translate-x-0" : "w-16 -translate-x-full md:translate-x-0"
      )}
    >
      <div className="flex h-16 items-center justify-between px-4 py-4 border-b border-sidebar-border/30">
        <div className={cn("flex items-center gap-2 transition-opacity", open ? "opacity-100" : "opacity-0 md:opacity-100")}> 
          {open ? (
            <img className="max-w-[20%]" src="./logo_sagu_simple.png" alt="" />
          ) : (
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center cursor-pointer" onClick={() => setOpen(true)}>
              <ChevronRight className="h-5 w-5" />
            </div>
          )}
          <span className={cn("font-semibold tracking-tight whitespace-nowrap transition-opacity", !open && "md:opacity-0")}>SAGU</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-1 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
                            (item.path !== '/' && location.pathname.startsWith(item.path));
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-all hover:bg-white/10",
                  isActive ? "bg-white/15 text-white" : "text-white/80 hover:text-white"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className={cn("transition-opacity", !open && "md:hidden")}>{item.name}</span>
                {isActive && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white md:mr-1.5"></span>}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="mt-auto p-4 border-t border-sidebar-border/30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
          {open && (
            <>
              <div className="flex-1">
                <p className="text-sm font-medium">Admin</p>
                <p className="text-xs text-white/70">admin@ifc.com</p>
              </div>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10">
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}