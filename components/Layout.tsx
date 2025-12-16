
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
  headerTitle?: string;
  onBack?: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, showNav = true, headerTitle, onBack }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-dark pb-24 select-none">
      {headerTitle && (
        <header className="flex items-center justify-between p-4 pb-2 sticky top-0 z-20 bg-background-dark/80 backdrop-blur-md">
          <button 
            onClick={() => onBack ? onBack() : navigate(-1)} 
            className="flex size-10 shrink-0 items-center justify-center rounded-full active:bg-white/10 text-white transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
          </button>
          <h1 className="text-white text-lg font-bold tracking-wide flex-1 text-center pr-10 uppercase">{headerTitle}</h1>
        </header>
      )}

      <main className="flex-1 flex flex-col w-full max-w-md mx-auto">
        {children}
      </main>

      {showNav && (
        <nav className="fixed bottom-0 left-0 w-full z-30 bg-surface-dark border-t border-[#233f48] pb-4 pt-2">
          <div className="flex justify-around items-end px-2 pb-2 pt-2 max-w-md mx-auto">
            <Link to="/home" className={`flex flex-1 flex-col items-center justify-end gap-1 ${isActive('/home') ? 'text-white' : 'text-text-secondary'} hover:text-white transition-colors group`}>
              <span className="material-symbols-outlined text-2xl group-hover:-translate-y-1 transition-transform">home</span>
              <span className="text-[10px] font-medium">Início</span>
            </Link>
            <Link to="/home" className="flex flex-1 flex-col items-center justify-end gap-1 text-primary group">
              <div className={`bg-[#233f48] rounded-full p-1 px-5 mb-1 ${isActive('/games') ? 'bg-[#2c4b56]' : ''} group-hover:bg-[#2c4b56] transition-colors`}>
                <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform fill-current">sports_esports</span>
              </div>
              <span className="text-[10px] font-medium font-bold">Jogar</span>
            </Link>
            <Link to="/stats" className={`flex flex-1 flex-col items-center justify-end gap-1 ${isActive('/stats') ? 'text-white' : 'text-text-secondary'} hover:text-white transition-colors group`}>
              <span className="material-symbols-outlined text-2xl group-hover:-translate-y-1 transition-transform">bar_chart</span>
              <span className="text-[10px] font-medium">Stats</span>
            </Link>
            <Link to="/profile" className={`flex flex-1 flex-col items-center justify-end gap-1 ${isActive('/profile') ? 'text-white' : 'text-text-secondary'} hover:text-white transition-colors group`}>
              <span className="material-symbols-outlined text-2xl group-hover:-translate-y-1 transition-transform">person</span>
              <span className="text-[10px] font-medium">Perfil</span>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};
