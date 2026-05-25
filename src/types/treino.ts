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
};

export type Treino = {
  id?: string;
  alunoId: string;
  alunoNome: string;
  alunoEmail: string;
  professorEmail: string;
  nome: string;
  objetivo?: string;
  dataTreino?: string;
  dataCriacao?: string;
  observacoes?: string;
  exercicios: Exercicio[];
  finalizado?: boolean;
  feedbackGeral?: {
    dificuldade?: 'facil' | 'medio' | 'dificil';
    energia?: 'baixa' | 'normal' | 'alta';
    dor?: boolean;
    comentario?: string;
  };
};
