
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-dark">
      <div className="relative flex-1 flex flex-col w-full">
        <div className="absolute inset-0 w-full h-full z-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-40">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark"></div>
        </div>
        
        <div className="relative z-10 flex flex-col h-full justify-end px-6 pb-12 w-full max-w-md mx-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="material-symbols-outlined text-primary text-4xl">functions</span>
            </div>
            <h1 className="text-white tracking-tight text-4xl font-black leading-tight mb-2">Matfácil</h1>
            <p className="text-slate-400 text-lg font-medium leading-normal max-w-[280px]">Domine a matemática jogando. Suba de nível agora.</p>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <button 
              onClick={() => navigate('/home')} 
              className="relative w-full cursor-pointer overflow-hidden rounded-xl h-14 bg-white hover:bg-slate-100 transition-colors duration-200 flex items-center justify-center gap-3 px-6 shadow-xl"
            >
              <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
              <span className="text-background-dark text-base font-bold tracking-wide">Entrar com Google</span>
            </button>
            <button 
              onClick={() => navigate('/home')} 
              className="relative w-full cursor-pointer overflow-hidden rounded-xl h-14 bg-primary hover:bg-primary/90 transition-all duration-200 flex items-center justify-center gap-2 px-6 shadow-glow"
            >
              <span className="material-symbols-outlined text-background-dark text-[20px]">person_add</span>
              <span className="text-background-dark text-base font-bold tracking-wide">Criar conta grátis</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
