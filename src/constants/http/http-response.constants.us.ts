export const HTTP_US = {
  TOKEN_EXPIRED: 'Forbidden: Token is expired.',
  TOKEN_INVALID_FORMAT: 'Forbidden: Token is in invalid format.',
  TOKEN_NOTFOUND: 'Unauthorized: Token not found.',
  FORBIDDEN: "Forbidden: You don't have permission to acess / on this server.",
  INTERNAL_SERVER_ERROR: 'Internal Server Error: The server encountered an erro and could not complete your request.',
  UNAUTHORIZED: 'Unauthorized: Access is denied due to invalid credentials.',
  ERROR_GENERATE_TOKEN: 'Erro ao gerar o token do usuário',
  ERROR_EMAIL_PASS_INVALID: 'Email ou senha são inválidos',
  ERROR_JWT_ERROR_VERIFY_TOKEN: 'Erro ao verificar token',
  ERROR_JWT_ERROR_INVALID_TOKEN: 'Token inválido',
  USER: {
    CREATE_DUPLICATE_EMAIL: 'E-mail já cadastrado',
    deprecated: false,
  },
} as const;
