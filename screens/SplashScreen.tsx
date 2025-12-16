
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/login'), 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative flex h-screen w-full flex-col justify-between overflow-hidden bg-background-dark">
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-[#11221e] to-black opacity-90 z-0"></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <span className="material-symbols-outlined absolute top-[10%] left-[10%] text-7xl text-primary animate-float">functions</span>
        <span className="material-symbols-outlined absolute bottom-[25%] left-[8%] text-6xl text-white/5 animate-float -rotate-12">percent</span>
        <span className="material-symbols-outlined absolute top-[40%] left-[50%] -translate-x-1/2 text-9xl text-white/5 blur-sm">grid_view</span>
      </div>

      <div className="h-12 w-full z-10"></div>
      
      <div className="z-10 flex flex-col items-center justify-center w-full px-6 gap-8 grow">
        <div className="flex flex-col items-center gap-2">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full"></div>
            <span className="material-symbols-outlined relative text-5xl text-primary mb-2">school</span>
          </div>
          <h1 className="text-white tracking-tight text-[40px] font-bold leading-tight text-center drop-shadow-lg">
            Mat<span className="text-primary">fácil</span>
          </h1>
          <p className="text-slate-400 text-base font-normal leading-normal text-center tracking-wide">
            Domine a Matemática
          </p>
        </div>
        
        <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center group/image">
          <div className="absolute inset-2 bg-primary/30 rounded-xl blur-md"></div>
          <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-slate-700/50 bg-[#162a2f] shadow-2xl flex items-center justify-center">
             <div className="w-full h-full bg-center bg-cover bg-no-repeat" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0MCW2KsLX4ZiLrXCxqNU53Tx9Z24TOro2Ebe_E3A3nCQ_JAOq5s4w7MiCw5urD2st9xrPNshkc_I4DquJN3y3W8T6iiNCC5El_yGuSOYhJ1cphzJLYbajEXS6qXR5Gi3gdPAEMIlb0vpsqVZLwNjK6zpZA-aAP52d5uwb5bRYOAKnngjtkvwWuZqASdIWKQtkiEruzXgSf-TSYIqBEkRFY6Vt1Lymy7iWRtkXaoxS10fsuA09Kkx2GYhDgRHOSREMOTnnfjDKAsRb")'}}></div>
          </div>
        </div>
      </div>

      <div className="z-10 w-full px-8 pb-12 pt-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-end px-1">
            <p className="text-slate-300 text-sm font-medium leading-normal">Carregando...</p>
            <p className="text-primary text-xs font-bold font-mono">100%</p>
          </div>
          <div className="rounded-full bg-[#1c333b] h-2 w-full overflow-hidden">
            <div className="h-full rounded-full bg-primary w-[100%] shadow-[0_0_10px_#2bbdee] transition-all duration-2000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
