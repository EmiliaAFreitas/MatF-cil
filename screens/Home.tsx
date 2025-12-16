
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';

export const Home: React.FC = () => {
  return (
    <Layout>
      <header className="flex items-center justify-between px-6 pt-8 pb-4 bg-background-dark sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full bg-gray-700 bg-center bg-cover border-2 border-primary" style={{backgroundImage: 'url("https://picsum.photos/seed/user/200")'}}>
            <div className="absolute bottom-0 right-0 bg-primary rounded-full p-0.5 border-2 border-background-dark">
              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Bem-vindo</span>
            <h1 className="text-white text-xl font-bold leading-none">Gabriel</h1>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-surface-dark/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
          <span className="material-symbols-outlined text-primary text-[20px]">bolt</span>
          <span className="text-primary font-bold text-sm">1250 XP</span>
        </div>
      </header>

      <main className="px-5 space-y-8 mt-2 pb-8">
        {/* Main Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform active:scale-[0.98] group">
          <div className="h-32 w-full bg-cover bg-center relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBs-vLo8EsjnrNcej6EwdI9eqcUAksKYX-oPji3kTxZOJQRfLbIv-Jvq5Ae0w93s8zf4Bba5X45PitkaXgbHOCbSymUwmKQhJm0_UNmGHGCBukahenLrRcHlblW3s7BD9Vvs0ZTD5kNxG1my5uQD6Nk40yDiR-vMA1Ned8uQl4kzbirHSUvdkO32Fxp5K0CS7ZdpFghtqefie_7dH3ODOwXpewXNq0TLR1uDznmMXqIBJ6GVvSMHOnz4LoZOWkcMxxQFff9c9P1qxKs")'}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <span className="bg-primary/90 text-background-dark text-xs font-bold px-2 py-1 rounded-md backdrop-blur-sm">Em progresso</span>
            </div>
          </div>
          <div className="p-5">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h2 className="text-background-dark text-xl font-bold leading-tight">Trigonometria</h2>
                <p className="text-gray-500 text-sm font-medium mt-1">Nível 2 • Triângulos Retângulos</p>
              </div>
              <div className="text-primary text-xs font-bold">70%</div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
              <div className="bg-primary h-2 rounded-full" style={{width: '70%'}}></div>
            </div>
            <div className="flex items-center justify-end">
              <Link to="/game/trigonometria" className="bg-background-dark text-white px-6 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-black transition-colors shadow-lg shadow-primary/20">
                Continuar <span className="material-symbols-outlined text-sm">play_arrow</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mini stats */}
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-surface-dark/40 border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-1">
            <span className="material-symbols-outlined text-primary text-2xl mb-1">local_fire_department</span>
            <span className="text-white font-bold text-lg">5 Dias</span>
            <span className="text-gray-400 text-xs">Ofensiva</span>
          </div>
          <div className="bg-surface-dark/40 border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-1">
            <span className="material-symbols-outlined text-neon-yellow text-2xl mb-1">emoji_events</span>
            <span className="text-white font-bold text-lg">Top 10%</span>
            <span className="text-gray-400 text-xs">No Ranking</span>
          </div>
        </section>

        {/* Tracks List */}
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-white text-lg font-bold">Trilhas de Aprendizado</h3>
            <span className="text-primary text-sm font-semibold cursor-pointer">Ver tudo</span>
          </div>
          <div className="space-y-4">
            <TrackItem 
              to="/game/funcao-afim"
              icon="functions"
              color="text-green-600"
              bgColor="bg-green-100"
              title="Função Afim"
              desc="Gráficos, coeficientes e raízes."
              progress={100}
              status="Completo"
            />
            <TrackItem 
              to="/game/equacao-2-grau"
              icon="paragliding"
              color="text-primary"
              bgColor="bg-primary/10"
              title="Equação 2º Grau"
              desc="Parábolas e vértice."
              progress={45}
              status="45%"
            />
            <TrackItem 
              to="/game/probabilidade"
              icon="blur_on"
              color="text-yellow-500"
              bgColor="bg-yellow-100/10"
              title="Probabilidade"
              desc="Análise de chances e eventos."
              progress={10}
              status="10%"
            />
          </div>
        </section>
      </main>
    </Layout>
  );
};

const TrackItem = ({ to, icon, color, bgColor, title, desc, progress, status }: any) => (
  <Link to={to} className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm relative overflow-hidden group cursor-pointer active:scale-95 transition-all">
    <div className={`w-16 h-16 shrink-0 ${bgColor} rounded-2xl flex items-center justify-center ${color}`}>
      <span className="material-symbols-outlined text-[32px]">{icon}</span>
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex justify-between items-center mb-1">
        <h4 className="text-background-dark font-bold text-base truncate">{title}</h4>
        <span className={`${color} text-xs font-bold ${bgColor} px-2 py-0.5 rounded-full`}>{status}</span>
      </div>
      <p className="text-gray-500 text-sm mb-2 line-clamp-1">{desc}</p>
      <div className="w-full bg-gray-100 rounded-full h-1.5">
        <div className={`h-1.5 rounded-full ${color.replace('text-', 'bg-')}`} style={{width: `${progress}%`}}></div>
      </div>
    </div>
  </Link>
);
