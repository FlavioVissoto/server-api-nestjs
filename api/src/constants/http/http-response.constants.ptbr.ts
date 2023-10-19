export const HTTP_PTBR = {
  TOKEN_EXPIRED: 'Não autorizado: Token informado está expirado.',
  TOKEN_INVALID_FORMAT: 'Não autorizado: Token informado está no formado inválido.',
  TOKEN_NOTFOUND: 'Não autorizado: Token não encontrado.',
  FORBIDDEN: 'Proibido: Você não tem permissão para acessar / este servidor.',
  INTERNAL_SERVER_ERROR: 'Erro interno do servidor: o servidor encontrou um erro e não pôde concluir sua solicitação.',
  UNAUTHORIZED: 'Não autorizado: acesso negado devido a credenciais inválidas.',
  ERROR_GENERATE_TOKEN: 'Erro ao gerar o token do usuário',
  ERROR_EMAIL_PASS_INVALID: 'Email ou senha são inválidos',
  ERROR_JWT_ERROR_VERIFY_TOKEN: 'Erro ao verificar token',
  ERROR_JWT_ERROR_INVALID_TOKEN: 'Token inválido',
  USER: {
    CREATE_DUPLICATE_EMAIL: 'E-mail já cadastrado',
    deprecated: false,
  },
} as const;
