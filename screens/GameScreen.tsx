
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { generateMathProblem } from '../services/geminiService';
import { MathProblem, Topic } from '../types';

export const GameScreen: React.FC = () => {
  const { topic } = useParams<{ topic: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [problem, setProblem] = useState<MathProblem | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);

  const fetchProblem = useCallback(async () => {
    setLoading(true);
    const p = await generateMathProblem((topic || 'funcao-afim') as Topic, 3);
    setProblem(p);
    setLoading(false);
    setUserAnswer('');
    setFeedback(null);
  }, [topic]);

  useEffect(() => {
    fetchProblem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheck = () => {
    if (!problem) return;
    const isCorrect = userAnswer.trim().toLowerCase() === problem.correctAnswer.toLowerCase();
    setFeedback({
      isCorrect,
      message: isCorrect ? 'Excelente! Você acertou!' : `Perto, mas não. A resposta era ${problem.correctAnswer}.`
    });

    if (isCorrect) {
      setTimeout(() => {
        navigate('/summary', { state: { score: 100, topic } });
      }, 1500);
    }
  };

  if (loading) {
    return (
      <Layout showNav={false} headerTitle="Gerando Desafio...">
        <div className="flex-1 flex flex-col items-center justify-center px-8 gap-6">
          <div className="relative w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          <p className="text-slate-400 text-center animate-pulse">Gemini está preparando um desafio matemático único para você...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout showNav={false} headerTitle={topic?.replace('-', ' ')} onBack={() => navigate('/home')}>
      <div className="flex-1 flex flex-col px-6 py-8 gap-8">
        
        {/* Progress bar */}
        <div className="w-full flex items-center gap-4">
          <div className="h-2 flex-1 bg-surface-dark rounded-full overflow-hidden">
             <div className="h-full bg-primary w-[33%]"></div>
          </div>
          <span className="text-xs font-bold text-primary">1/3</span>
        </div>

        {/* Challenge Box */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-neon-green/30 rounded-3xl blur opacity-25 group-hover:opacity-50 transition"></div>
          <div className="relative bg-surface-dark border border-white/5 p-8 rounded-[2rem] shadow-2xl flex flex-col gap-4">
             <span className="bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-400 px-3 py-1 rounded-full self-start">Pergunta</span>
             <h2 className="text-white text-2xl font-bold leading-tight">{problem?.question}</h2>
             
             {problem?.visualHint === 'urna' && (
                <div className="relative w-full aspect-video bg-black/20 rounded-2xl border border-white/5 flex items-center justify-center gap-3 p-4">
                  {[1, 2, 3, 4].map(n => (
                    <div key={n} className={`w-10 h-10 rounded-full shadow-glow ${n % 2 === 0 ? 'bg-neon-yellow' : 'bg-slate-700'}`}></div>
                  ))}
                </div>
             )}
          </div>
        </div>

        {/* Input Area */}
        <div className="flex flex-col gap-4">
          {problem?.type === 'multiple-choice' && problem.options ? (
            <div className="grid grid-cols-1 gap-3">
              {problem.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setUserAnswer(opt)}
                  className={`w-full p-4 rounded-2xl text-left font-bold transition-all ${userAnswer === opt ? 'bg-primary text-background-dark' : 'bg-surface-dark text-white border border-white/5'}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          ) : (
            <div className="relative">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Sua resposta..."
                className="w-full h-16 bg-white rounded-2xl px-6 text-xl font-bold text-background-dark placeholder:text-slate-400 focus:ring-4 ring-primary/30 outline-none"
              />
            </div>
          )}

          {feedback && (
            <div className={`p-4 rounded-2xl border animate-bounce ${feedback.isCorrect ? 'bg-neon-green/10 border-neon-green text-neon-green' : 'bg-red-500/10 border-red-500 text-red-400'}`}>
              <p className="text-sm font-bold flex items-center gap-2">
                <span className="material-symbols-outlined">{feedback.isCorrect ? 'check_circle' : 'error'}</span>
                {feedback.message}
              </p>
            </div>
          )}

          <button
            onClick={handleCheck}
            disabled={!userAnswer}
            className={`w-full h-16 rounded-2xl font-bold text-lg transition-all shadow-glow ${!userAnswer ? 'bg-surface-dark text-slate-500' : 'bg-primary text-background-dark active:scale-95'}`}
          >
            VERIFICAR
          </button>
        </div>

        <div className="mt-auto pb-4">
          <p className="text-center text-slate-500 text-xs">Precisa de ajuda? Clique na lâmpada no canto superior.</p>
        </div>
      </div>
    </Layout>
  );
};
