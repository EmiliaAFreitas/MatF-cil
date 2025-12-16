
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { getAIFeedback } from '../services/geminiService';

export const Summary: React.FC = () => {
  const location = useLocation();
  const { score, topic } = location.state || { score: 0, topic: 'Matemática' };
  const [aiFeedback, setAiFeedback] = useState('Analisando seu desempenho...');

  useEffect(() => {
    const fetchFeedback = async () => {
      const fb = await getAIFeedback([{ topic, score }]);
      setAiFeedback(fb);
    };
    fetchFeedback();
  }, [topic, score]);

  return (
    <Layout showNav={false} headerTitle="Resumo">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 gap-8">
        
        <div className="flex flex-col items-center gap-2">
          <div className="relative">
            <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full"></div>
            <span className="material-symbols-outlined text-7xl text-primary drop-shadow-glow">emoji_events</span>
          </div>
          <h2 className="text-white text-3xl font-black mt-4">Nível Concluído!</h2>
          <p className="text-slate-400 font-medium">Você mandou muito bem.</p>
        </div>

        <div className="w-full bg-surface-dark border border-white/5 rounded-[2.5rem] p-8 shadow-2xl flex flex-col gap-6">
          <div className="flex justify-around">
            <div className="flex flex-col items-center">
              <span className="text-primary text-3xl font-black">+{score}</span>
              <span className="text-slate-500 text-xs uppercase font-bold tracking-widest">XP Ganho</span>
            </div>
            <div className="w-px h-10 bg-white/10 self-center"></div>
            <div className="flex flex-col items-center">
              <span className="text-neon-green text-3xl font-black">100%</span>
              <span className="text-slate-500 text-xs uppercase font-bold tracking-widest">Precisão</span>
            </div>
          </div>

          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-full shadow-glow"></div>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl w-full">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary text-sm">psychology</span>
            <span className="text-xs font-bold text-primary uppercase">Dica do Gemini IA</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed italic">
            "{aiFeedback}"
          </p>
        </div>

        <div className="w-full flex flex-col gap-3 mt-4">
          <Link to="/home" className="w-full h-16 bg-white rounded-2xl flex items-center justify-center font-bold text-background-dark text-lg shadow-xl active:scale-95 transition-all">
            VOLTAR AO INÍCIO
          </Link>
          <button className="w-full h-14 bg-surface-dark border border-white/5 text-slate-300 font-bold rounded-2xl">
            COMPARTILHAR
          </button>
        </div>
      </div>
    </Layout>
  );
};
