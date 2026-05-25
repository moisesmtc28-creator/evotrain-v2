export type Exercicio = {
  id?: string;

  nome: string;
  grupoMuscular?: string;

  series: string;
  repeticoes: string;
  descanso: string;

  cargaAtual?: string;
  cargaSugerida?: string;

  metodo?: string;
  velocidadeExecucao?: string;

  observacoes?: string;

  video?: string;

  finalizado?: boolean;

  historicoCargas?: {
    id: string;
    carga: string;
    data: string;
  }[];

  feedback?: {
    dificuldade?: 'facil' | 'medio' | 'dificil';
    energia?: 'baixa' | 'normal' | 'alta';
    dor?: boolean;
    comentario?: string;
  };
};
