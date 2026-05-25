export type Refeicao = {
  horario: string;

  nome: string;

  alimentos: string[];

  observacoes?: string;
};

export type Dieta = {
  id?: string;

  alunoId: string;
  alunoNome: string;

  professorEmail: string;

  objetivo?: string;

  calorias?: string;

  refeicoes: Refeicao[];

  observacoes?: string;

  criadaEm?: string;
};
