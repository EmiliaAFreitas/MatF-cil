
import { GoogleGenAI, Type } from "@google/genai";
import { MathProblem, Topic } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateMathProblem = async (topic: Topic, level: number): Promise<MathProblem> => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Gere um desafio matemático de nível ${level} sobre o tópico "${topic.replace('-', ' ')}". 
    Se o tópico for "probabilidade", use o contexto de uma urna com bolas coloridas.
    Se o tópico for "equação", apresente a equação para resolver.
    O problema deve ser desafiador mas adequado para estudantes de ensino fundamental/médio.
    A explicação deve ser clara e didática.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          question: { type: Type.STRING, description: "A pergunta ou enunciado do problema." },
          type: { type: Type.STRING, enum: ["multiple-choice", "numeric"], description: "Tipo de resposta esperada." },
          options: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Opções para múltipla escolha (se aplicável)." 
          },
          correctAnswer: { type: Type.STRING, description: "A resposta correta em formato string." },
          explanation: { type: Type.STRING, description: "Passo a passo da resolução." },
          visualHint: { type: Type.STRING, description: "Sugestão de elemento visual (ex: 'gráfico', 'triângulo', 'urna')." }
        },
        required: ["question", "type", "correctAnswer", "explanation"]
      }
    }
  });

  try {
    return JSON.parse(response.text || '{}') as MathProblem;
  } catch (e) {
    console.error("Failed to parse AI response", e);
    // Fallback problem
    return {
      question: "Resolva 3x - 4 = 11",
      type: "numeric",
      correctAnswer: "5",
      explanation: "Adicione 4 a ambos os lados (3x = 15) e divida por 3 (x = 5)."
    };
  }
};

export const getAIFeedback = async (history: any[]): Promise<string> => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Baseado no histórico de desempenho: ${JSON.stringify(history)}, forneça um conselho motivador e curto em português sobre o que o aluno deve focar para melhorar em matemática.`,
  });
  return response.text || "Continue praticando para dominar novos conceitos!";
};
