export type TipoUsuario = 'admin' | 'professor' | 'aluno';

export type Usuario = {
  id?: string;

  nome: string;
  email: string;

  tipo: TipoUsuario;

  ativo?: boolean;

  criadoEm?: string;

  foto?: string;

  telefone?: string;

  professorResponsavel?: string;
};
